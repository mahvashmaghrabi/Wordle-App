import wordList_normal from '../wordList_normal.txt';
import wordList_hard from '../wordList_hard.txt';
import EasyLevel from './EasyLevel';
//import wordList from '../tempWordList.txt';

export const defaultGrid = [
  ['', '', '', '', '', ''],
  ['', '', '', '', '', ''],
  ['', '', '', '', '', ''],
  ['', '', '', '', '', ''],
  ['', '', '', '', '', ''],
  ['', '', '', '', '', ''],
];

// javascript used set as set has better lookup time O(1)
// check if there is another way to do this

let word_list = '';

export const generateWordSet = async (props) => {
  let wordSet;
  let todaysWord;
  console.log('diff:', props);

  // todo: check if we can use axios instaed of fetch
  //
  if (props === 'Hard') {
    word_list = wordList_hard;
  }
  if (props === 'Normal') {
    word_list = wordList_normal;
  }
  console.log('wordlist:', word_list);

  await fetch(word_list)
    .then((response) => response.text())
    .then((result) => {
      const wordArr = result.split('\n');
      todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)];
      wordSet = new Set(wordArr);
    });

  return { wordSet, todaysWord };
};
//}
//export default EmptyGrid;
