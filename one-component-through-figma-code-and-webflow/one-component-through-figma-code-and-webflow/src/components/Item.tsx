import React from 'react';

const img = "http://localhost:3845/assets/2db7819fa5d783a2e9e0280ddf1fd7435f49490d.svg";
const img1 = "http://localhost:3845/assets/59cd86e257c1bee8a2592b95b220eff112639b54.svg";

type ItemProps = {
  className?: string;
  icon?: React.ReactNode | null;
  description?: string;
  title?: string;
  size?: "default" | "large";
};

export function Item({ 
  className, 
  icon = null, 
  description = "Item description", 
  title = "Item title", 
  size = "default" 
}: ItemProps) {
  if (size === "large") {
    return (
      <div 
        className={`content-stretch flex gap-5 items-center relative w-[393px] ${className || ''}`} 
        data-name="size=large" 
        data-node-id="418:31282"
      >
        <div 
          className="bg-gradient-to-t from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] border-solid content-stretch flex flex-col items-center justify-center p-3 relative rounded-lg shrink-0 w-[56px] h-[56px]" 
          data-name="icon" 
          data-node-id="418:31283"
        >
          {icon || (
            <div className="relative size-[32px]" data-name="blocks" data-node-id="418:31284">
              <div className="absolute inset-[12.5%]" data-name="Vector" data-node-id="I418:31284;37:1986">
                <div className="absolute inset-[-2.08%]">
                  <img alt="" className="block max-w-none size-full" style={{ filter: 'brightness(0) invert(1)' }} src={img} />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px not-italic relative shrink-0" data-node-id="512:21807">
          <p className="font-semibold leading-[28px] relative shrink-0 text-[18px] text-white" data-node-id="418:31286">
            {title}
          </p>
          <p className="font-normal leading-[24px] relative shrink-0 text-[16px] text-zinc-400" data-node-id="418:31287">
            {description}
          </p>
        </div>
      </div>
    );
  }
  
  return (
    <div 
      className={`content-stretch flex flex-col gap-2 items-start relative w-[393px] ${className || ''}`} 
      data-name="size=default" 
      data-node-id="41:4349"
    >
      <div className="content-stretch flex gap-2 items-center relative shrink-0 w-full" data-node-id="512:19189">
        {icon || (
          <div className="relative size-[24px]" data-name="blocks" data-node-id="41:4341">
            <div className="absolute inset-[12.5%]" data-name="Vector" data-node-id="I41:4341;37:1986">
              <div className="absolute inset-[-2.78%]">
                <img alt="" className="block max-w-none size-full" style={{ filter: 'brightness(0) invert(1)' }} src={img1} />
              </div>
            </div>
          </div>
        )}
        <div className="basis-0 flex flex-col font-semibold grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[18px] text-white" data-node-id="41:4344">
          <p className="leading-[28px]">{title}</p>
        </div>
      </div>
      <p className="font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-zinc-400 w-full" data-node-id="41:4345">
        {description}
      </p>
    </div>
  );
}

export default Item;
