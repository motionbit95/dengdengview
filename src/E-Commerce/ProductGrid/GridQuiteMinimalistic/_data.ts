export const bucketAddress =
  "https://firebasestorage.googleapis.com/v0/b/motionbit-dangdangview.appspot.com/o";

export function calculateDday(targetDate: string) {
  var today = new Date();
  today.setHours(0, 0, 0, 0); // 오늘 날짜의 시간을 00:00:00으로 설정
  var target = new Date(targetDate);
  target.setHours(0, 0, 0, 0); // 대상 날짜의 시간을 00:00:00으로 설정

  var difference = target.valueOf() - today.valueOf();
  var daysDifference = Math.ceil(difference / (1000 * 60 * 60 * 24)); // 일 단위로 차이 계산

  return daysDifference;
}

export const campains = [
  {
    id: "p0o9i8u7",
    name: "[체험단]펫루션 유산균 영양제, 강아지 체험단 모집",
    imageUrl: bucketAddress + "/demo%2Fdemo2.png?alt=media",
    expireDate: "2024-04-20",
    type: "배송",
    views: 200,
  },
  {
    id: "p0o9i8u7",
    name: "[체험단]펫루션 유산균 영양제, 강아지 체험단 모집",
    imageUrl: bucketAddress + "/demo%2Fdemo2.png?alt=media",
    expireDate: "2024-04-20",
    type: "배송",
    views: 200,
  },
  {
    id: "p0o9i8u7",
    name: "[체험단]펫루션 유산균 영양제, 강아지 체험단 모집",
    imageUrl: bucketAddress + "/demo%2Fdemo2.png?alt=media",
    expireDate: "2024-04-20",
    type: "배송",
    views: 200,
  },
  {
    id: "p0o9i8u7",
    name: "[체험단]펫루션 유산균 영양제, 강아지 체험단 모집",
    imageUrl: bucketAddress + "/demo%2Fdemo2.png?alt=media",
    expireDate: "2024-04-20",
    type: "배송",
    views: 200,
  },
  {
    id: "p0o9i8u7",
    name: "[체험단]펫루션 유산균 영양제, 강아지 체험단 모집",
    imageUrl: bucketAddress + "/demo%2Fdemo2.png?alt=media",
    expireDate: "2024-04-20",
    type: "배송",
    views: 200,
  },
  {
    id: "p0o9i8u7",
    name: "[체험단]펫루션 유산균 영양제, 강아지 체험단 모집",
    imageUrl: bucketAddress + "/demo%2Fdemo2.png?alt=media",
    expireDate: "2024-04-20",
    type: "배송",
    views: 200,
  },
  {
    id: "p0o9i8u7",
    name: "[체험단]펫루션 유산균 영양제, 강아지 체험단 모집",
    imageUrl: bucketAddress + "/demo%2Fdemo2.png?alt=media",
    expireDate: "2024-04-20",
    type: "배송",
    views: 124,
  },
  {
    id: "p0o9i8u7",
    name: "[체험단]펫루션 유산균 영양제, 강아지 체험단 모집",
    imageUrl: bucketAddress + "/demo%2Fdemo2.png?alt=media",
    expireDate: "2024-04-20",
    type: "배송",
    views: 98,
  },
  {
    id: "p0o9i8u7",
    name: "[체험단]펫루션 유산균 영양제, 강아지 체험단 모집",
    imageUrl: bucketAddress + "/demo%2Fdemo2.png?alt=media",
    expireDate: "2024-04-20",
    type: "배송",
    views: 25,
  },
  {
    id: "p0o9i8u7",
    name: "[체험단]펫루션 유산균 영양제, 강아지 체험단 모집",
    imageUrl: bucketAddress + "/demo%2Fdemo2.png?alt=media",
    expireDate: "2024-04-20",
    type: "배송",
    views: 777,
  },
];

export type ElementType<T extends ReadonlyArray<unknown>> =
  T extends ReadonlyArray<infer ElementType> ? ElementType : never;

export type Campain = ElementType<typeof campains>;
