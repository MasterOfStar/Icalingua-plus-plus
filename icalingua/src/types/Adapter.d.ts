import SendMessageParams from './SendMessageParams'
import LoginForm from './LoginForm'
import Message from './Message'
import {FileElem, MemberInfo} from 'oicq'
import Room from './Room'
import IgnoreChatInfo from './IgnoreChatInfo'
import SearchableGroup from './SearchableGroup'
import RoamingStamp from './RoamingStamp'
import OnlineData from './OnlineData'
import SearchableFriend from './SearchableFriend'

type CookiesDomain = 'tenpay.com' | 'docs.qq.com' | 'office.qq.com' | 'connect.qq.com' |
    'vip.qq.com' | 'mail.qq.com' | 'qzone.qq.com' | 'gamecenter.qq.com' |
    'mma.qq.com' | 'game.qq.com' | 'qqweb.qq.com' | 'openmobile.qq.com' |
    'qun.qq.com' | 'ti.qq.com'

export default interface Adapter {
    reportRead(messageId: string): any

    getGroupMembers(group: number): Promise<MemberInfo[]>

    setGroupNick(group: number, nick: string): any

    getGroupMemberInfo(group: number, member: number, noCache?: boolean): Promise<MemberInfo>

    sendMessage(data: SendMessageParams): any

    createBot(form: LoginForm): any

    getGroups(): Promise<SearchableGroup[]>

    getFriendsFallback(): Promise<SearchableFriend[]>

    fetchMessages(roomId: number, offset: number): Promise<Message[]>

    sliderLogin(ticket: string): void

    reLogin(): void

    updateRoom(roomId: number, room: object): any

    updateMessage(roomId: number, messageId: string, message: object): any

    sendGroupPoke(gin: number, uin: number): any

    addRoom(room: Room): any

    getForwardMsg(resId: string): Promise<Message[]>

    getUin(): number

    getGroupFileMeta(gin: number, fid: string): Promise<FileElem['data']>

    getUnreadCount(): Promise<number>

    getFirstUnreadRoom(): Promise<Room>

    getSelectedRoom(): Promise<Room>

    getRoom(roomId: number): Promise<Room>

    setOnlineStatus(status: number): any

    logOut(): void

    clearCurrentRoomUnread(): any

    setRoomPriority(roomId: number, priority: 1 | 2 | 3 | 4 | 5): any

    setRoomAutoDownload(roomId: number, autoDownload: boolean): any

    setRoomAutoDownloadPath(roomId: number, downloadPath: string): any

    pinRoom(roomId: number, pin: boolean): any

    ignoreChat(data: IgnoreChatInfo): any

    removeChat(roomId: number): any

    deleteMessage(roomId: number, messageId: string): any

    revealMessage(roomId: number, messageId: string | number): any

    fetchHistory(messageId: string, roomId?: number): any

    stopFetchingHistory(): any

    getCookies(domain: CookiesDomain): Promise<string>

    getIgnoredChats(): Promise<IgnoreChatInfo[]>

    removeIgnoredChat(roomId: number): any

    getRoamingStamp(no_cache?: boolean): Promise<RoamingStamp[]>

    sendOnlineData(): any

    getSystemMsg(): any

    handleRequest(type: 'friend' | 'group', flag: string, accept?: boolean): any
}
