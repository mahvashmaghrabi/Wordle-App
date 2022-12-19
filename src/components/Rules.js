import React from 'react';

import '../components/Rules.css';

const Rules = () => {
  return (
    <div className="rulesStyle">
      <ul>
        <li>The player has to guess the Wordle in six attempts or less</li>

        <li>Every word, which is entered should be in the word list</li>

        <li>If the letter is correct, the color would turn green</li>

        <li>
          If the letter is correct but placed wrong then it would turn yellow
        </li>

        <li>An incorrect letter turns gray</li>

        <li>Letters can be used more than one time</li>
      </ul>
    </div>
  );
};

export default Rules;
