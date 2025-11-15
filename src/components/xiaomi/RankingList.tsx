"use client";

import Image from "next/image";

import Top1Icon from "statics/images/top1.png";
import Top2Icon from "statics/images/top2.png";
import Top3Icon from "statics/images/top3.png";

interface RankingListProps {
  rank: number;
  product: string;
  quantity: string;
  price: string;
}

export default function RankingList({ rank, product, quantity, price }: RankingListProps) {
  const getRankGradient = (rank: number) => {
    switch (rank) {
    case 1:
      return "linear-gradient(90deg, rgba(255, 200, 61, 0.2) 0%, rgba(0, 0, 0, 0) 18.36%), #1F2023";
    case 2:
      return "linear-gradient(90deg, rgba(202, 202, 202, 0.20) 0%, rgba(0, 0, 0, 0.00) 18.36%), #1F2023";
    case 3:
      return "linear-gradient(90deg, rgba(153, 115, 90, 0.20) 0%, rgba(0, 0, 0, 0.00) 18.36%), #1F2023";
    default:
      return "linear-gradient(90deg, rgba(202, 202, 202, 0.20) 0%, rgba(0, 0, 0, 0.00) 18.36%), #1F2023";
    }
  };

  const getRankIcon = (rank: number) => {
    if (rank === 1) {
      return (
        <div className="w-10 h-10 flex items-center justify-center">
          <Image src={Top1Icon} alt="Top 1" className="w-10 h-10" />
        </div>
      );
    }
    if (rank === 2) {
      return (
        <div className="w-10 h-10 flex items-center justify-center">
          <Image src={Top2Icon} alt="Top 2" className="w-10 h-10" />
        </div>
      );
    }
    if (rank === 3) {
      return (
        <div className="w-10 h-10 flex items-center justify-center">
          <Image src={Top3Icon} alt="Top 3" className="w-10 h-10" />
        </div>
      );
    }
    return (
      <div className="w-10 h-10 flex items-center justify-center">
        <span className="text-xiaomi-primary-subdued text-center text-[32px] font-black italic uppercase leading-[48px]">{rank}</span>
      </div>
    );
  };

  return (
    <div className="flex items-center justify-between self-stretch lg:px-6 px-[12px] py-4 rounded-2xl" style={{ background: getRankGradient(rank) }}>
      {getRankIcon(rank)}

      <div className="w-[170px] text-xiaomi-text-normal text-base font-black italic uppercase leading-6">{product}</div>

      <div className="flex items-center gap-4">
        <div className="w-[170px] text-xiaomi-text-normal text-base font-black italic uppercase leading-6">{quantity}</div>
      </div>

      <div className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl border border-white/5 bg-xiaomi-neutral-accent backdrop-blur-[50px]">
        <div className="text-xiaomi-text-primary text-base font-black italic capitalize leading-6">{price}</div>
      </div>
    </div>
  );
}
