import { Text } from '@chakra-ui/react';
import React from 'react';
import Highlited from './Highlited';
import Topics from './Topics';

export default function Result({ transcript }) {
  return (
    <div>
      <Text>
        {transcript.sentiment_analysis_results.map(result => (
          <Highlited
            text={result.text}
            sentiment={result.sentiment}
            entities={transcript.entities}
          />
        ))}
      </Text>
      <Topics transcript={transcript} />
    </div>
  );
}
