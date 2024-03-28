import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Menu, Minus, Plus, X } from "lucide-react";
import Footer from "../_components/footer";
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger } from "@/components/ui/select";
import Link from "next/link";

const RegistrationPage = () => {
  const yes = true;

  return (
    <>
      <div className="w-full flex flex-col bg-neutral-50">
        <div className="flex-col justify-center items-center inline-flex">
          <div className="pl-[505px] pr-[15px] py-[15px] bg-white justify-end items-center inline-flex">
            <div className="justify-start items-start gap-[465px] flex">
              <Link
                href="/"
                className="justify-center items-center gap-2.5 flex"
              >
                <img className="w-[22px] h-[22px]" src="images/logo.png" />
                <div className="text-neutral-900 text-xl font-semibold font-nav">
                  SUMROV
                </div>
              </Link>
              <X />
            </div>
          </div>
          <div className="w-[1125px] px-[350px] py-[15px] bg-zinc-600 border border-black justify-center items-center gap-2.5 inline-flex">
            <div className="text-neutral-50 text-lg font-semibold font-pre">
              상품 등록
            </div>
          </div>
        </div>
        <div className="flex-col justify-start items-center gap-[74px] flex">
          <div className="border border-stone-300 border-t-0 flex-col justify-center items-center flex">
            <div className="flex-col justify-center items-center gap-[100px] flex mt-[48px]">
              <div className="w-[700px] flex-col justify-center items-center gap-[50px] flex">
                <div className="w-[700px] flex-col justify-between items-center flex">
                  <div className="w-[700px] justify-between items-center inline-flex">
                    <div className="text-black text-sm font-normal font-noto">
                      카테고리
                    </div>
                    <RadioGroup
                      defaultValue="top"
                      className="h-[35px] justify-center items-center gap-6 flex"
                    >
                      <div className="h-[35px] pt-[5px] pb-1.5 justify-center items-center flex">
                        <div className="grow shrink basis-0 self-stretch px-3 justify-start items-center gap-3 inline-flex">
                          <RadioGroupItem
                            id="top"
                            value="top"
                            className="w-6 h-6"
                          />
                          <Label
                            htmlFor="top"
                            className="text-black text-sm font-normal font-pre cursor-pointer"
                          >
                            TOP
                          </Label>
                        </div>
                      </div>
                      <div className="p-[0.50px] justify-center items-center flex">
                        <div className="self-stretch px-3 justify-start items-center gap-3 inline-flex">
                          <RadioGroupItem
                            id="bottom"
                            value="bottom"
                            className="w-6 h-6"
                          />
                          <Label
                            htmlFor="bottom"
                            className="text-black text-sm font-normal font-pre cursor-pointer"
                          >
                            BOTTOM
                          </Label>
                        </div>
                      </div>
                      <div className="pr-3 pt-[5px] pb-1.5 justify-start items-center flex">
                        <div className="self-stretch px-3 justify-start items-center gap-3 inline-flex">
                          <RadioGroupItem
                            id="acc"
                            value="acc"
                            className="w-6 h-6"
                          />
                          <Label
                            htmlFor="acc"
                            className="text-black text-sm font-normal font-pre cursor-pointer"
                          >
                            ACC
                          </Label>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>
                  <div className="h-[438px] flex-col justify-start items-start gap-6 mt-6 flex">
                    <StandardForm
                      title="상품명"
                      className="w-[550px] h-[26px]"
                    />

                    <StandardForm title="가격" className="w-[550px] h-[26px]" />
                    <StandardForm
                      title="할인 정보"
                      className="w-[550px] h-[26px]"
                      placeholder="(상품)"
                    />

                    <StandardForm
                      title="상세 정보"
                      className="w-[550px] h-[252px]"
                    />
                  </div>
                </div>
                <div className="w-[700px] h-[0px] border-2 border-gray-200"></div>
                <div className="h-[145px] flex-col justify-center items-start gap-[23px] flex">
                  <ActiveForm
                    title="사이즈 옵션"
                    className="w-[500px] h-[26px]"
                  />
                  <div className="w-[700px] h-[0px] border-2 border-gray-200"></div>
                  <div className="justify-start items-center flex">
                    <div className="justify-start items-center gap-6 flex">
                      <Tag title="L" />
                      <Tag title="M" />
                      <Tag title="S" />
                    </div>
                  </div>
                  <div className="w-[700px] h-[0px] border-2 border-gray-200"></div>
                </div>
                <div className="h-[145px] flex-col justify-center items-start gap-[23px] flex">
                  <ActiveForm
                    title="색상 옵션"
                    className="w-[500px] h-[26px]"
                  />
                  <div className="w-[700px] h-[0px] border-2 border-gray-200"></div>
                  <div className="justify-start items-center flex">
                    <div className="justify-start items-center gap-6 flex">
                      <Tag title="블랙" />
                      <Tag title="그레이" />
                      <Tag title="화이트" />
                    </div>
                  </div>
                  <div className="w-[700px] h-[0px] border-2 border-gray-200"></div>
                </div>
                <div className="h-[145px] flex-col justify-center items-start gap-[23px] flex">
                  <ActiveForm
                    title="메인 이미지"
                    className="w-[500px] h-[26px]"
                  />
                  <div className="w-[700px] h-[0px] border-2 border-gray-200"></div>
                  <div className="justify-start items-center flex">
                    <div className="justify-start items-center gap-6 flex">
                      <Tag title="IMAGE-1" />
                    </div>
                  </div>
                  <div className="w-[700px] h-[0px] border-2 border-gray-200"></div>
                </div>
                <div className="h-[145px] flex-col justify-center items-start gap-[23px] flex">
                  <ActiveForm
                    title="상세 이미지"
                    className="w-[500px] h-[26px]"
                  />
                  <div className="w-[700px] h-[0px] border-2 border-gray-200"></div>
                  <div className="justify-start items-center flex">
                    <div className="justify-start items-center gap-6 flex">
                      <Tag title="IMAGE-1" />
                      <Tag title="IMAGE-2" />
                    </div>
                  </div>
                  <div className="w-[700px] h-[0px] border-2 border-gray-200"></div>
                </div>
              </div>
              <div className="flex-col justify-center items-center gap-[74px] flex pb-10">
                <div className="text-center text-black text-[22px] font-medium font-noto">
                  미리보기
                </div>
                <div className="flex-col justify-start items-center gap-[15px] flex">
                  <div className="justify-center items-center gap-[25px] inline-flex">
                    <img
                      className="w-[550px] h-[733.33px]"
                      src="https://via.placeholder.com/550x733"
                    />
                    <div className="w-[550px] h-[733px] flex-col justify-center items-center gap-[50px] inline-flex">
                      <div className="flex-col justify-start items-start gap-5 flex">
                        <div className="flex-col justify-start items-start gap-2.5 flex">
                          <div className="justify-start items-start gap-[5px] inline-flex">
                            <div className="w-3.5 h-3.5 bg-black dark:bg-white" />
                            <div className="w-3.5 h-3.5 bg-rose-500" />
                            <div className="w-3.5 h-3.5 bg-green-600" />
                          </div>
                          <div className="text-black dark:text-neutral-50 text-xl font-medium font-pre">
                            Lorem ipsum dolor sit (BLACK, RED, GREEN)
                          </div>
                        </div>
                        <div className="flex-col justify-start items-start gap-[50px] flex">
                          <div className="text-black dark:text-neutral-50 text-sm font-normal font-pre">
                            KRW 10,000
                          </div>
                          <div className="flex-col justify-start items-start gap-[30px] flex">
                            <div className="w-[421px] text-neutral-600 dark:text-zinc-100 text-xs font-light font-pre">
                              -로램잇섬 로램잇섬 Lorem ipsum dolor sit amet
                              로램잇섬 로램잇섬 로램 로램 Lorem ipsum dolor sit
                              amet Lorem ipsum dolor sit amet, consectetuer
                              <br />
                              <br />
                              -로램잇섬 로램잇섬 Lorem ipsum dolor sit amet
                              로램잇섬 로램잇섬 로램
                              <br />
                              로램잇섬 Lorem ipsum dolor sit amet Lorem ipsum
                              dolor sit amet, consectetuer <br />
                              <br />
                              -로램잇섬 로램잇섬 Lorem ipsum dolor sit amet
                              로램잇섬 로램잇섬 로램
                              <br />
                              로램잇섬 Lorem ipsum dolor sit amet Lorem ipsum
                              dolor sit amet, consectetuer
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className={cn(
                          "flex-col justify-center items-center gap-[75px] flex",
                          yes && "gap-[30px]"
                        )}
                      >
                        <div className="flex-col justify-center items-end gap-[15px] flex">
                          <div className="w-[318px] justify-between items-center inline-flex">
                            <div className="text-neutral-400 dark:text-zinc-100 text-[11px] font-normal font-pre">
                              색상
                            </div>
                            <Select>
                              <SelectTrigger className="dark:bg-neutral-900 dark:text-stone-300 rounded-sm w-60 h-[26px] text-neutral-600 text-[11px] font-normal font-pre">
                                -[필수] 옵션을 선택해 주세요-
                              </SelectTrigger>
                            </Select>
                          </div>
                          <div className="justify-center items-center gap-[50px] inline-flex">
                            <div className="text-neutral-400 dark:text-zinc-100 text-[11px] font-normal font-pre">
                              사이즈
                            </div>
                            <Select>
                              <SelectTrigger className="dark:bg-neutral-900 dark:text-stone-300 rounded-sm w-60 h-[26px] text-neutral-600 text-[11px] font-normal font-pre">
                                -[필수] 옵션을 선택해 주세요-
                              </SelectTrigger>
                            </Select>
                          </div>
                        </div>
                        {yes && (
                          <>
                            <div className="w-[299px] flex mt-3 flex-col">
                              <div className="flex flex-col">
                                <div className="text-neutral-600 dark:text-neutral-50 text-[10px] font-normal font-pre">
                                  Lorem ipsum dolor sit
                                </div>
                                <div className="text-neutral-600 dark:text-neutral-50 text-[10px] font-normal font-pre">
                                  -블랙/S
                                </div>
                              </div>
                              <div className="text-black dark:text-white text-[11px] font-semibold font-pre flex justify-end w-full">
                                KRW 10,000
                              </div>
                              <div className="flex gap-1">
                                <input
                                  placeholder="1"
                                  className="text-[10px] font-normal font-pre w-[37px] h-[18px] pl-2 rounded-sm border border-neutral-300 dark:bg-neutral-900"
                                />

                                <div className="w-[18px] h-[18px]">
                                  <Plus className="w-[18px] h-[18px] dark:text-black bg-neutral-300 rounded-sm" />
                                </div>
                                <div className="w-[18px] h-[18px]">
                                  <Minus className="w-[18px] h-[18px] dark:text-black bg-neutral-300 rounded-sm" />
                                </div>
                              </div>
                            </div>
                            <div className="w-[299px] h-3.5 justify-center items-start gap-[167px] inline-flex">
                              <div className="dark:text-white text-[11px] font-semibold font-pre">
                                총상품금액
                              </div>
                              <div className="w-[84px] flex justify-center items-center">
                                <div className="text-blue-500 text-[11px] font-semibold font-pre">
                                  KRW 10,000
                                </div>
                                <div className="text-blue-500 text-[10px] font-normal font-pre">
                                  (1개)
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                        <div className="flex-col justify-start items-start gap-2.5 flex">
                          <Button className="rounded-none hover:bg-neutral-900 w-[315px] h-[41px] py-3.5 bg-neutral-900 dark:bg-zinc-600 justify-center items-center inline-flex">
                            <div className="text-neutral-50 text-[11px] font-medium font-body">
                              Buy it Now
                            </div>
                          </Button>
                          <div className="w-[315px] h-[41px] py-3.5 border border-neutral-900 dark:border-zinc-600 justify-center items-center inline-flex">
                            <div className="text-black dark:text-neutral-50 text-[11px] font-medium font-body">
                              Add to Cart
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-col justify-start items-start gap-10 flex">
                    <img
                      className="w-[550px] h-[733.33px]"
                      src="https://via.placeholder.com/550x733"
                    />
                    <img
                      className="w-[550px] h-[733.33px]"
                      src="https://via.placeholder.com/550x733"
                    />
                    <img
                      className="w-[550px] h-[733.33px]"
                      src="https://via.placeholder.com/550x733"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Button className="w-[700px] h-[50px] px-[234px] py-[9px] bg-black justify-center items-center gap-2.5 inline-flex">
            <div className="text-center text-white text-base font-semibold font-noto">
              업로드
            </div>
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
};

const StandardForm = React.forwardRef<
  React.ElementRef<"input">,
  React.ComponentPropsWithoutRef<"input">
>(({ title, className, ...props }, ref) => {
  return (
    <div className="w-[700px] justify-between items-center flex">
      <div className={"w-[109.47px] text-sm font-normal font-noto"}>
        {title}
      </div>
      <input
        className={cn(
          "bg-white dark:text-white rounded-sm dark:bg-zinc-800 border placeholder:text-neutral-300 text-black text-[11px] font-normal font-pre pl-2 border-neutral-300",
          className
        )}
        {...props}
      />
    </div>
  );
});
StandardForm.displayName = "StandardForm";

const ActiveForm = React.forwardRef<
  React.ElementRef<"input">,
  React.ComponentPropsWithoutRef<"input">
>(({ title, className, ...props }, ref) => {
  return (
    <div className="w-[700px] justify-between items-center flex">
      <div className={"w-[109.47px] text-sm font-normal font-noto"}>
        {title}
      </div>
      <input
        className={cn(
          "bg-white dark:text-white rounded-sm dark:bg-zinc-800 border placeholder:text-neutral-300 text-black text-[11px] font-normal font-pre pl-2 border-neutral-300",
          className
        )}
        {...props}
      />
      <Button
        variant={"ghost"}
        className="h-[26px] font-noto hover:bg-inherit active:hover:bg-inherit"
      >
        추가
      </Button>
    </div>
  );
});
ActiveForm.displayName = "ActiveForm";

const Tag = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ title, ...props }, ref) => {
  return (
    <div className="justify-center items-center gap-[19px] flex h-[26px] px-2 border-[1px] rounded-md border-neutral-400">
      <Menu className="h-4 w-4" />
      <div className="text-neutral-600 text-[13px] font-bold font-pre">
        {title}
      </div>
      <X className="h-4 w-4" />
    </div>
  );
});
Tag.displayName = "Tag";

export default RegistrationPage;