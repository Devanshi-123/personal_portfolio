import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../../App.css';
 

 const experience = props =>{
     return(
         <div className="desc full">
<VerticalTimeline>
  <VerticalTimelineElement
   contentStyle={{ background: '#efb08c', color: 'black' }}
   contentArrowStyle={{ borderRight: '7px solid  #efb08c' }}
    className="vertical-timeline-element--work"
    date="October 2020 - November 2020"
    iconStyle={{ background: '#efb08c', color: 'black' }}
  >
    <h3 className="vertical-timeline-element-title">Data Science Intern</h3>
    <h4 className="vertical-timeline-element-subtitle">The Sparks Foundation</h4>
    <p>
      Have made different machine learning models for solving various tasks
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
   contentStyle={{ background: '#ffb6b9', color: 'black' }}
   contentArrowStyle={{ borderRight: '7px solid  #ffb6b9' }}
    className="vertical-timeline-element--work"
    date="Jun 2020 - Oct 2020"
    iconStyle={{ background: '#ffb6b9', color: 'black' }}
  >
    <h3 className="vertical-timeline-element-title">Full Stack Developer Intern</h3>
    <h4 className="vertical-timeline-element-subtitle">Statekind</h4>
    <p>
      Worked on a full stack billing application using M.E.R.N stack
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
  className="vertical-timeline-element--work"
    contentStyle={{ background: '#f8efd4', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  #f8efd4' }}
    date="Sepember 2020 - present"
    iconStyle={{ background: '#f8efd4', color: 'black' }}
  >
    <h3 className="vertical-timeline-element-title">Web Development Lead</h3>
    <h4 className="vertical-timeline-element-subtitle">Developer Student Club NIT Patna</h4>
    <p>
     Mentoring students regarding web development, providing learning resources, leading different projects
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#8ac6d1', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  #8ac6d1' }}
    date="August 2020 - present"
    iconStyle={{ background: '#8ac6d1', color: 'black' }}
  >
    <h3 className="vertical-timeline-element-title">Beta Microsoft Learn Student Ambassador</h3>
    <h4 className="vertical-timeline-element-subtitle">Microsoft</h4>
    <p>
     Collaboration, Mentoring, Organising virtual workshop
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#bedbbb', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  #bedbbb' }}
    date="August 2020 - present"
    iconStyle={{ background: '#bedbbb', color: 'black' }}
  >
    <h3 className="vertical-timeline-element-title">Coding Team Lead</h3>
    <h4 className="vertical-timeline-element-subtitle">Hackslash NIT Patna</h4>
    <p>
     Mentoring students regarding data structure and algorithm, providing learning resources, orgainizing competitions
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
   contentStyle={{ background: '#ebd4d4', color: 'black' }}
   contentArrowStyle={{ borderRight: '7px solid  #ebd4d4' }}
    className="vertical-timeline-element--work"
    date="June 2020 - Present"
    iconStyle={{ background: '#ebd4d4', color: 'black' }}
  >
    <h3 className="vertical-timeline-element-title">Technical Content Writer</h3>
    <h4 className="vertical-timeline-element-subtitle">Medium</h4>
    <p>
      Have written various blogs related to data structure and algorithm
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
   contentStyle={{ background: '#cae4db', color: 'black' }}
   contentArrowStyle={{ borderRight: '7px solid  #cae4db' }}
    className="vertical-timeline-element--work"
    date="February 2020 - Present"
    iconStyle={{ background: '#cae4db', color: 'black' }}
  >
    <h3 className="vertical-timeline-element-title">Student Coordinator</h3>
    <h4 className="vertical-timeline-element-subtitle">Alumni Cell</h4>
    <p>
      Organising events, team work, working on alumni cell website
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
   contentStyle={{ background: '#d2f6c5', color: 'black' }}
   contentArrowStyle={{ borderRight: '7px solid  #d2f6c5' }}
    className="vertical-timeline-element--work"
    date="January 2019 - February 2019"
    iconStyle={{ background: '#d2f6c5', color: 'black' }}
  >
    <h3 className="vertical-timeline-element-title">Event Organizer</h3>
    <h4 className="vertical-timeline-element-subtitle">Corona & Melange</h4>
    <p>
      Organising events, team work
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>
    </div>
     );
 }

 export default experience;