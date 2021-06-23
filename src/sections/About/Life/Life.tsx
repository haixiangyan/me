import Timeline from "../../../components/Timeline";
import TimelineHeader from "../../../components/Timeline/Header";
import TimelineItem from "../../../components/Timeline/Item";

const Life = () => {
  return (
    <Timeline>
      <TimelineHeader>1993</TimelineHeader>
      <TimelineItem time="7月" header="👶🏻" />
      <TimelineHeader>...</TimelineHeader>
      <TimelineItem direction="left" header="Livin' life..." />
      <TimelineHeader>2015</TimelineHeader>
      <TimelineItem
        time="3月"
        header="🎓 Colgate University 🎉"
        content={[
          'Hamilton, NY',
          'Double Major: Computer Science, Japanese',
          'Summa Cum Laude, Phi Beta Kappa (ΦΒΚ) Honor Society',
        ]}
      />
      <TimelineItem
        direction="left"
        time="7月"
        header={["✈️ Move to Japan.", 'English Teacher @ Komatsu Meihou High School (JET Program). 👨‍🏫']}
        content={['Komatsu, Ishikawa Prefecture']}
      />
      <TimelineHeader>2016</TimelineHeader>
      <TimelineItem
        time="8月"
        header={["⛩️ Move to Kyoto.", 'Software & Web Engineer @ Weblio. 💻']}
        content={['Kyoto, Kyoto Prefecture']}
      />
      <TimelineHeader>...</TimelineHeader>
      <TimelineItem
        direction="left"
        time="8月"
        header={['???']}
      />
      <TimelineHeader>💀 ⚰️</TimelineHeader>
    </Timeline>
  )
}

export default Life
