"use client";

import React from "react";
import { BoldNavbar } from "@/ui/components/BoldNavbar";
import { BoldNavbarMobile } from "@/ui/components/BoldNavbarMobile";
import { Button } from "@/ui/components/Button";
import { IconWithBackground } from "@/ui/components/IconWithBackground";
import { FeatherLandmark, FeatherCheckCircle2, FeatherShield } from "@subframe/core";
import { BoldFooter } from "@/ui/components/BoldFooter";

function BoldHomePage() {
  return (
    <div className="flex w-full flex-col items-start bg-default-background">
      <div className="flex w-full flex-col items-center justify-center gap-2 bg-default-background px-6 py-6 mobile:px-2 mobile:py-2">
        <BoldNavbar className="mobile:hidden" />
        <BoldNavbarMobile className="hidden mobile:flex" />
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-8 bg-default-background px-6 pt-40 pb-24">
        <span className="max-w-[1024px] whitespace-pre-wrap font-['Montserrat'] text-[92px] font-[900] leading-[84px] text-default-font text-center -tracking-[0.04em] mobile:font-['Montserrat'] mobile:text-[62px] mobile:font-[900] mobile:leading-[58px] mobile:tracking-normal">
          {"将想法变为现实"}
        </span>
        <span className="max-w-[576px] whitespace-pre-wrap font-['Montserrat'] text-[20px] font-[500] leading-[28px] text-subtext-color text-center -tracking-[0.015em]">
          {
            "无需编写代码即可构建高质量的软件，量化帮建造的一切都是你的，将您的代码库同步到Git，并在任何代码编辑器中编辑，一键立即导出或发布您的应用程序."
          }
        </span>
        <div className="flex flex-wrap items-center justify-center gap-6">
          <Button
            size="large"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Start today
          </Button>
          <Button
            variant="neutral-tertiary"
            size="large"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            How it works
          </Button>
        </div>
      </div>
      <div className="flex w-full flex-col items-center bg-default-background px-6 py-24">
        <img
          className="h-144 w-full max-w-[1280px] flex-none object-cover"
          src="https://res.cloudinary.com/subframe/image/upload/v1724690087/uploads/302/w2ra2yihpofsdy1h4uhy.png"
        />
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-2 bg-brand-300 px-6 py-24">
        <div className="flex w-full max-w-[1280px] grow shrink-0 basis-0 flex-wrap items-center justify-center gap-12">
          <div className="flex min-w-[320px] grow shrink-0 basis-0 flex-col items-center justify-center gap-10 self-stretch">
            <div className="flex w-full max-w-[576px] flex-col items-start justify-center gap-10">
              <div className="flex flex-col items-start justify-center gap-4">
                <span className="font-['Montserrat'] text-[30px] font-[700] leading-[34px] text-default-font -tracking-[0.025em]">
                一个超人的全栈产品工程师
                </span>
                <span className="whitespace-pre-wrap font-['Montserrat'] text-[18px] font-[400] leading-[26px] text-default-font -tracking-[0.01em]">
                  {
                    "产品构建者和开发人员的新时代"
                  }
                </span>
              </div>
              <Button
                variant="brand-secondary"
                size="large"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Send your first transaction
              </Button>
            </div>
          </div>
          <div className="flex grow shrink-0 basis-0 flex-col items-center justify-center gap-2 self-stretch">
            <div className="flex h-144 w-full min-w-[240px] max-w-[576px] flex-none flex-col items-center justify-center gap-2 overflow-hidden">
              <img
                className="w-full grow shrink-0 basis-0 object-cover"
                src="https://res.cloudinary.com/subframe/image/upload/v1724705524/uploads/302/l5oq75rpdkq2kowa2xkj.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-6 bg-default-background px-6 py-24">
        <div className="flex w-full max-w-[1280px] grow shrink-0 basis-0 flex-wrap items-center justify-center gap-12">
          <div className="flex grow shrink-0 basis-0 flex-col items-center justify-center gap-2 self-stretch">
            <div className="flex h-144 w-full min-w-[240px] max-w-[576px] flex-none flex-col items-center justify-center gap-2 overflow-hidden">
              <img
                className="w-full grow shrink-0 basis-0 object-cover"
                src="https://res.cloudinary.com/subframe/image/upload/v1724690133/uploads/302/tswlwr0qfwwhkgbjwplw.png"
              />
            </div>
          </div>
          <div className="flex min-w-[320px] grow shrink-0 basis-0 flex-col items-start justify-center gap-10 self-stretch">
            <div className="flex max-w-[448px] flex-col items-start justify-center gap-4">
              <span className="font-['Montserrat'] text-[30px] font-[700] leading-[34px] text-default-font -tracking-[0.025em]">
              设计师
              </span>
              <span className="whitespace-pre-wrap font-['Montserrat'] text-[18px] font-[400] leading-[26px] text-subtext-color -tracking-[0.01em]">
                {
                  "将您的设计理念变为现实，而无需在Figma等工具中进行繁琐的原型工作。"
                }
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Button
                size="large"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Initiate quantum account
              </Button>
              <Button
                variant="neutral-tertiary"
                size="large"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-6 bg-default-background px-6 py-24">
        <div className="flex w-full max-w-[1280px] grow shrink-0 basis-0 flex-wrap items-center justify-center gap-12">
          <div className="flex min-w-[320px] grow shrink-0 basis-0 flex-col items-start justify-center gap-10 self-stretch">
            <div className="flex max-w-[448px] flex-col items-start justify-center gap-4">
              <span className="font-['Montserrat'] text-[30px] font-[700] leading-[34px] text-default-font -tracking-[0.025em]">
                产品团队
              </span>
              <span className="whitespace-pre-wrap font-['Montserrat'] text-[18px] font-[400] leading-[26px] text-subtext-color -tracking-[0.01em]">
                {
                  "产品团队授权非技术团队成员编写代码。通过构建真实的原型来调整抽象的想法。"
                }
              </span>
            </div>
            <Button
              size="large"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Explore quantum yield
            </Button>
          </div>
          <div className="flex grow shrink-0 basis-0 flex-col items-center justify-center gap-2 self-stretch">
            <div className="flex h-144 w-full min-w-[240px] max-w-[576px] flex-none flex-col items-center justify-center gap-2 overflow-hidden">
              <img
                className="w-full grow shrink-0 basis-0 object-cover"
                src="https://res.cloudinary.com/subframe/image/upload/v1724690142/uploads/302/fbkapcq4o1zsq98df0t6.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center px-6 py-24">
        <div className="flex h-px w-full max-w-[1280px] flex-none flex-col items-center gap-2 bg-neutral-border" />
      </div>
      <div className="flex w-full grow shrink-0 basis-0 items-center justify-center gap-4 px-6 py-24">
        <div className="flex max-w-[1280px] grow shrink-0 basis-0 flex-wrap items-center justify-center gap-12">
          <div className="flex min-w-[240px] grow shrink-0 basis-0 items-center gap-4">
            <IconWithBackground size="x-large" icon={<FeatherLandmark />} />
            <span className="font-['Montserrat'] text-[16px] font-[500] leading-[24px] text-default-font -tracking-[0.01em]">
              All cosmic assets securely stored in neutron vaults
            </span>
          </div>
          <div className="flex min-w-[240px] grow shrink-0 basis-0 items-center gap-4">
            <IconWithBackground size="x-large" icon={<FeatherCheckCircle2 />} />
            <span className="font-['Montserrat'] text-[16px] font-[500] leading-[24px] text-default-font -tracking-[0.01em]">
              Certified and compliant with intergalactic protocols
            </span>
          </div>
          <div className="flex min-w-[240px] grow shrink-0 basis-0 items-center gap-4">
            <IconWithBackground size="x-large" icon={<FeatherShield />} />
            <span className="font-['Montserrat'] text-[16px] font-[500] leading-[24px] text-default-font -tracking-[0.01em]">
              Regulated and licensed across all star systems
            </span>
          </div>
        </div>
      </div>
      <div className="flex w-full grow shrink-0 basis-0 flex-col items-center justify-center gap-2 px-6 py-24">
        <div className="flex w-full max-w-[1280px] flex-wrap items-center justify-center gap-6 rounded-[32px] bg-brand-200 px-12 py-28 mobile:px-6 mobile:py-28">
          <div className="flex min-w-[240px] max-w-[576px] grow shrink-0 basis-0 flex-col items-start gap-8 px-8 mobile:px-0 mobile:py-0">
            <span className="font-['Montserrat'] text-[50px] font-[700] leading-[56px] text-default-font -tracking-[0.025em] mobile:font-['Montserrat'] mobile:text-[40px] mobile:font-[700] mobile:leading-[40px] mobile:tracking-normal">
              创业者
            </span>
            <span className="w-full max-w-[448px] whitespace-pre-wrap font-['Montserrat'] text-[18px] font-[400] leading-[26px] text-default-font -tracking-[0.01em]">
              {
                "创始人和个人企业家在几分钟内迭代并验证。在不到一天的时间里推出完整的产品。"
              }
            </span>
            <Button
              variant="brand-secondary"
              size="large"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Redeem galactic credits
            </Button>
          </div>
          <div className="flex min-w-[240px] max-w-[576px] grow shrink-0 basis-0 flex-col items-center justify-center gap-2 self-stretch overflow-hidden">
            <img
              className="w-full grow shrink-0 basis-0 rounded-lg object-cover"
              src="https://res.cloudinary.com/subframe/image/upload/v1724690087/uploads/302/w2ra2yihpofsdy1h4uhy.png"
            />
          </div>
        </div>
      </div>
      <div className="flex w-full grow shrink-0 basis-0 flex-col items-center justify-center gap-2 bg-brand-900 px-6 py-24">
        <div className="flex w-full max-w-[1280px] grow shrink-0 basis-0 flex-wrap items-center justify-center gap-12">
          <div className="flex grow shrink-0 basis-0 flex-col items-center justify-center gap-2 self-stretch">
            <div className="flex h-144 w-full min-w-[240px] max-w-[448px] flex-none flex-col items-center justify-center gap-2 overflow-hidden">
              <img
                className="w-full grow shrink-0 basis-0 object-cover"
                src="https://res.cloudinary.com/subframe/image/upload/v1724690075/uploads/302/ajop7v0t3y1bjmf9obyp.png"
              />
            </div>
          </div>
          <div className="flex min-w-[320px] grow shrink-0 basis-0 flex-col items-start justify-center gap-10 self-stretch">
            <div className="flex w-full max-w-[576px] flex-col items-start justify-center gap-10">
              <div className="flex flex-col items-start justify-center gap-4">
                <span className="font-['Montserrat'] text-[30px] font-[700] leading-[34px] text-brand-300 -tracking-[0.025em]">
                如何用可视化构建工具开发无需代码的软件
                </span>
                <span className="whitespace-pre-wrap font-['Montserrat'] text-[18px] font-[400] leading-[26px] text-white -tracking-[0.01em]">
                  {
                    "直接从内置UI库选择元素（按钮、表单等），通过属性面板调整样式和功能，AI自动生成响应式布局和状态管理代码"
                  }
                </span>
              </div>
              <Button
                variant="brand-secondary"
                size="large"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Explore cosmic commerce
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full grow shrink-0 basis-0 flex-col items-center gap-2 bg-default-background px-6 py-24">
        <div className="flex w-full max-w-[1280px] grow shrink-0 basis-0 flex-wrap items-center justify-center gap-12">
          <div className="flex min-w-[320px] grow shrink-0 basis-0 flex-col items-center justify-center gap-10 self-stretch">
            <span className="whitespace-pre-wrap font-['Montserrat'] text-[72px] font-[900] leading-[68px] text-default-font -tracking-[0.04em] mobile:font-['Montserrat'] mobile:text-[48px] mobile:font-[900] mobile:leading-[44px] mobile:tracking-normal">
              {"无需代码构建企业级应用的全新范式"}
            </span>
          </div>
          <div className="flex grow shrink-0 basis-0 flex-col items-center justify-center gap-2 self-stretch">
            <div className="flex h-144 w-full min-w-[320px] max-w-[448px] flex-none flex-col items-start justify-center gap-2 overflow-hidden rounded-3xl bg-brand-300 px-8 py-8 mobile:px-6 mobile:py-6">
              <div className="flex w-full grow shrink-0 basis-0 flex-col items-center justify-center gap-2">
                <span className="font-['Montserrat'] text-[28px] font-[600] leading-[36px] text-default-font -tracking-[0.025em]">
                  &quot;产品经理：

拖拽构建功能原型
实时预览用户流程
导出可交付开发的代码.&quot;
                </span>
              </div>
              <div className="flex flex-col items-start justify-center gap-2 rounded-full bg-brand-900 px-6 py-4">
                <span className="font-['Inter'] text-[16px] font-[600] leading-[20px] text-white">
                  Captain Zara, Galactic Wanderer
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full grow shrink-0 basis-0 flex-col items-center justify-center gap-2 px-6 py-24">
        <div className="flex w-full max-w-[1280px] flex-col items-center justify-center gap-8 rounded-[32px] bg-brand-900 px-6 pt-28 pb-16">
          <div className="flex w-full flex-col items-center justify-center gap-6 pt-32">
            <span className="w-full max-w-[768px] whitespace-pre-wrap font-['Montserrat'] text-[72px] font-[900] leading-[68px] text-brand-300 text-center -tracking-[0.04em] mobile:font-['Montserrat'] mobile:text-[48px] mobile:font-[900] mobile:leading-[44px] mobile:tracking-normal">
              {"设计师"}
            </span>
            <span className="w-full max-w-[768px] whitespace-pre-wrap font-['Montserrat'] text-[20px] font-[500] leading-[28px] text-white text-center -tracking-[0.015em]">
              {
                "将Figma/Sketch设计转为可运行代码"
              }
            </span>
          </div>
          <Button
            variant="brand-secondary"
            size="large"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Activate your portal
          </Button>
        </div>
      </div>
      <div className="flex w-full flex-col items-start">
        <BoldFooter />
      </div>
    </div>
  );
}

export default BoldHomePage;
