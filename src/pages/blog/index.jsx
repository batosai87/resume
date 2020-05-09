import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Layout, Row, Col } from 'antd';
import Header from '../../components/PageLayout/Header';

import SidebarWrapper from '../../components/PageLayout/Sidebar';
import PostCard from '../../components/PostCard';
import SEO from '../../components/Seo';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

const Blog = () => (
  <Layout className="outerPadding">
    <Layout className="container">
      <Header />
      <SEO
        title="Experience"
        description="I like blogging about various web technologies and other stuff related to
          javascript and other trends like graphql, prisma etc. This blog expresses my views of various technologies
          and scenarios I have come across in realtime."
        path="experience"
      />
      <SidebarWrapper>
        <div className="marginTopTitle">
          <h1 className="titleSeparate">Experience</h1>
        </div>
        <Timeline lineColor={'#ddd'}>
  <TimelineItem
    key="001"
    dateText="2019 - 2020"
    style={{ color: '#e86971' }}
  >
    <h3>PT. BIMA DESA SAWITA, MEDAN</h3>
    <h4>Logistic Manager</h4>
    <p>
    Organise transportation activities and arranging for services as necessary.
    </p>
    <p>
    Maintains quality throughout the logistic processes. 
    </p>
    <p>
    Digitalise logistics report form into online database.
    </p>
  </TimelineItem>
  <TimelineItem
    key="002"
    dateText="2018 - 2019"
    dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
    bodyContainerStyle={{
      background: '#ddd',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
    }}
  >
    <h3 style={{ color: '#61b8ff' }}>PT. HARMONI LESTARI BERSAMA, MEDAN</h3>
    <h4 style={{ color: '#61b8ff' }}>Digital Marketing Manager</h4>
    <p>
    - Developing marketing materials in e-commerce and social media to gain sales.
    </p>
    <p>
    - Creating marketing plans and brand activation.
    </p>
  </TimelineItem>
  <TimelineItem
    key="003"
    dateComponent={(
      <div
        style={{
          display: 'block',
          float: 'left',
          padding: '10px',
          background: 'rgb(150, 150, 150)',
          color: '#fff',
        }}
      >
        2017 - 2018
      </div>
    )}
  >
    <h3>PT. DIGITAL MEDIA GROUP, MEDAN</h3>
    <h4>Lead Developer</h4>
    <p>
    - Set timeline and goal of android developer team.
    </p>
    <p>
    - Responsible in all app life-cycle: concept, design, build, deploy, test and release to Play Store.
    </p>
    <p>
    - Taking responsibility for technically solutions including architecture, and technology development.
    </p>
  </TimelineItem>
  <TimelineItem
    key="004"
    dateText="2014 - 2015"
    dateInnerStyle={{ background: '#76bb7f' }}
  >
    <h3>PT. AINO INDONESIA, YOGYAKARTA</h3>
    <h4>System Administrator</h4>
    <p>
    - Data center build and troubleshooting.
 

    </p>
    <p>
    - Embedded system for parking on street billing machine.
    </p>
    <p>
    - Troubleshooting Transjakarta and Transjogja & TWC e-Ticketing System.
      </p>
      
  </TimelineItem>
</Timeline>
      </SidebarWrapper>
    </Layout>
  </Layout>
);

Blog.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    }).isRequired,
  }).isRequired,
};



export default Blog;