import { Image } from "antd";

const projects = [
  {
    logo: 'https://www.macbaler.me/img/webrtclogocropW.b95e2850.png',
    title: 'WebRtc device checker',
    content: <Image src="https://www.macbaler.me/img/ss.d7961b29.png"/>,
    description: <p>Created while working at Weblio in Japan. Helps users test & troubleshoot their video/audio devices, as well as video/audio bandwidth settings. Allowed preemptive test of setup before entering online lesson room. Utilized a fork of PeerJS and manipulated the MediaStream API to create a WebRTC video call with oneself.</p>,
    techs: []
  }
]

export default projects
