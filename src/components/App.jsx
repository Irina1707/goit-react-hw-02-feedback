
import React from 'react';
//import PropTypes from 'prop-types';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section'
import Notification from './Notification/Notification';
import { AppBlock } from './App.styled';

class App extends React.Component {

  static defaultProps = {
       total: 0,
    positivePercentage: 0,
  }
  
  state = {
  good: 0,
  neutral: 0,
  bad: 0,
  
};

    onLeaveFeedback = (option) => {
        this.setState(prevState => {
            return ({
                [option]: prevState[option] + 1
            })
        })
      this.countTotalFeedback();
      this.countPositiveFeedbackPercentage();
    }

  countTotalFeedback = () =>
    this.setState(prevState => ({
      total: prevState.good + prevState.neutral + prevState.bad,
    }));

    countPositiveFeedbackPercentage = () => {
        this.setState(prevState => ({
      positivePercentage: Math.round(
        (prevState.good / (prevState.good + prevState.neutral + prevState.bad)) * 100,
      ),
    }));
  };
        
    render() {
         const { good, neutral, bad, total, positivePercentage } = this.state;
        return (
          <AppBlock>
            <Section
              title="Please leave feedback">
              
            <FeedbackOptions
              options={['good', 'neutral', 'bad']}
              onLeaveFeedback={this.onLeaveFeedback}></FeedbackOptions>
            </Section>

            
            <Section title="Statistics">
              {(total > 0)
                ?  
                <Statistics
                  good={good}
                  neutral={neutral}
                  bad={bad}
                  total={total}
                  positivePercentage={positivePercentage} />
                :
                <Notification message="There is no feedback"></Notification>
              }   
              </Section>
               
        </AppBlock>
      )
    }
}

export default App;
 