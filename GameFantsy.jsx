import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const questions = [
  {
    sentence: "O céu estava muito **lumifante** naquela noite.",
    options: ["Substantivo", "Verbo", "Adjetivo", "Advérbio"],
    answer: "Adjetivo",
    explanation: "'Lumifante' sugere uma característica do céu, similar a 'brilhante', sendo um adjetivo."
  },
  {
    sentence: "Ela sempre **pirandava** quando ouvia essa música.",
    options: ["Substantivo", "Verbo", "Adjetivo", "Advérbio"],
    answer: "Verbo",
    explanation: "'Pirandava' tem a terminação típica dos verbos na terceira pessoa, como 'dançava' ou 'cantava'."
  },
  {
    sentence: "O cachorro soltou um alto **grunefato** ao ouvir o trovão.",
    options: ["Substantivo", "Verbo", "Adjetivo", "Advérbio"],
    answer: "Substantivo",
    explanation: "'Grunefato' parece representar um som emitido pelo cachorro, funcionando como um substantivo."
  },
  {
    sentence: "Ela saiu da sala **rapidosmente** para não perder o ônibus.",
    options: ["Substantivo", "Verbo", "Adjetivo", "Advérbio"],
    answer: "Advérbio",
    explanation: "'Rapidosmente' segue a estrutura de advérbios terminados em '-mente', como 'rapidamente'."
  },
  {
    sentence: "Ele **sombriu** quando ouviu a notícia inesperada.",
    options: ["Substantivo", "Verbo", "Adjetivo", "Advérbio"],
    answer: "Verbo",
    explanation: "'Sombriu' lembra a conjugação verbal, sugerindo uma ação semelhante a 'entristeceu'."
  }
];

export default function GAMEFANTSY() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState(null);

  const handleAnswer = (option) => {
    setSelectedOption(option);
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
      setFeedback("Correto! " + questions[currentQuestion].explanation);
    } else {
      setFeedback("Errado! " + questions[currentQuestion].explanation);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setFeedback(null);
    } else {
      setFeedback(`Fim do jogo! Sua pontuação: ${score}/${questions.length}`);
    }
  };

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">GAMEFANTSY</h1>
      <Card className="p-4 w-full max-w-md text-center">
        <CardContent>
          <p className="text-lg mb-4">{questions[currentQuestion].sentence}</p>
          {questions[currentQuestion].options.map((option) => (
            <Button
              key={option}
              className="m-2"
              onClick={() => handleAnswer(option)}
              disabled={!!selectedOption}
            >
              {option}
            </Button>
          ))}
          {feedback && (
            <div className="mt-4">
              <p>{feedback}</p>
              <Button className="mt-2" onClick={nextQuestion}>Próxima</Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
