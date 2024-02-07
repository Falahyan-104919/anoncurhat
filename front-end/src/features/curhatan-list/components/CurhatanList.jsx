import CurhatanCard from './CurhatanCard';

export default function CurhatanList() {
  const cardsArray = Array.from({ length: 28 }, (_, index) => index);
  return (
    <div className="flex flex-row flex-wrap flex-grow-0 h-max p-8 gap-8 items-center justify-center bg-zinc-950">
      {cardsArray.map((items, index) => {
        return <CurhatanCard key={index} />;
      })}
    </div>
  );
}
