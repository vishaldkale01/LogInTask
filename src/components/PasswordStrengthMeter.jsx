import React from 'react';
import zxcvbn from 'zxcvbn';

export default function PasswordStrengthMeter  ({ password })  {
  const testResult = zxcvbn(password);
  const num = testResult.score * 100/4;

  const createPassLabel = () => {
    switch(testResult.score) {
      case 0:
        return 'Very low';
      case 1:
        return 'Low';
      case 2:
        return 'Medim';
      case 3:
        return 'High';
        case 4:
        return 'strong';
              return '';
    }
  }

  const funcProgressColor = () => {
    switch(testResult.score) {
      case 0:
        return '#828282';
      case 1:
        return '#FF0000'; // red
      case 2:
        return '#FFAD00'; // orange
      case 3:
        return '#454B1B'; //  Green 
        case 4:
        return '#00FF00'; //  Green 

        default:
        return 'none';
    }
  }

  const changePasswordColor = () => ({
    width: `${num}%`,
    background: funcProgressColor(),
    height: '7px'
  })

  return (
    <>
      <div className="progress mt-2" style={{ height: '7px' }}>
        <div className="progress-bar" style={changePasswordColor()}></div>
      </div>
      <p style={{ color: funcProgressColor() }}>{createPassLabel()}</p>
    </>
  )
}

