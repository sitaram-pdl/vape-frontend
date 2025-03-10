'use client';
import { useRouter } from 'next/navigation';

import { cn } from '@/lib/utils';

export const SRPandeyLogo = ({
  width = 177,
  height = 59,
  fill = '#005A77',
  className = '',
}: {
  width?: number;
  height?: number;
  className?: string;
  fill?: string;
}) => {
  const router = useRouter();
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 201 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => router.push('/')}
      className={(cn(className), 'scale-110 cursor-pointer')}
    >
      <path
        d="M12.7319 15.418C12.7319 16.7692 12.1576 17.8685 11.0091 18.7161C9.86673 19.5575 8.31286 19.9782 6.3475 19.9782C5.21128 19.9782 4.21938 19.88 3.37182 19.6834C2.5304 19.4808 1.74119 19.2259 1.00418 18.9188V15.6299H1.39111C2.12198 16.2133 2.93883 16.6617 3.84167 16.9749C4.75065 17.2881 5.62278 17.4448 6.45805 17.4448C6.67302 17.4448 6.95554 17.4263 7.30562 17.3895C7.6557 17.3526 7.94129 17.2912 8.16239 17.2052C8.43263 17.0947 8.65373 16.9565 8.8257 16.7907C9.00381 16.6248 9.09287 16.3792 9.09287 16.0537C9.09287 15.7527 8.96389 15.4948 8.70594 15.2798C8.45412 15.0587 8.08255 14.8898 7.59121 14.7731C7.0753 14.6503 6.52868 14.5366 5.95136 14.4322C5.38018 14.3217 4.84277 14.1835 4.33915 14.0177C3.1845 13.643 2.35229 13.1363 1.84253 12.4976C1.3389 11.8527 1.08709 11.0543 1.08709 10.1023C1.08709 8.82481 1.65827 7.78378 2.80064 6.97921C3.94915 6.1685 5.42317 5.76314 7.2227 5.76314C8.12554 5.76314 9.01609 5.8522 9.89437 6.03031C10.7788 6.20228 11.5434 6.42031 12.1883 6.68441V9.84434H11.8106C11.2578 9.40213 10.5792 9.03363 9.7746 8.73882C8.97617 8.43788 8.15932 8.2874 7.32404 8.2874C7.02924 8.2874 6.73443 8.3089 6.43963 8.35189C6.15097 8.38874 5.87152 8.46244 5.60128 8.573C5.36175 8.66512 5.156 8.80638 4.98403 8.99678C4.81206 9.18103 4.72608 9.39292 4.72608 9.63245C4.72608 9.99481 4.86427 10.2743 5.14065 10.4708C5.41703 10.6612 5.93908 10.8362 6.7068 10.9959C7.21042 11.1003 7.69255 11.2017 8.15318 11.2999C8.61995 11.3982 9.1205 11.5333 9.65484 11.7053C10.7051 12.0492 11.4789 12.5191 11.9764 13.1148C12.48 13.7044 12.7319 14.4722 12.7319 15.418ZM18.545 19.7295H15.0995V16.1089H18.545V19.7295ZM29.6739 10.2128C29.6739 9.86891 29.6033 9.5741 29.462 9.32843C29.3207 9.08276 29.0781 8.8893 28.7342 8.74804C28.4947 8.64977 28.2152 8.59142 27.8958 8.573C27.5765 8.54843 27.2049 8.53615 26.7811 8.53615H25.5006V12.2304H26.5877C27.1527 12.2304 27.6256 12.2028 28.0064 12.1475C28.3872 12.0922 28.7066 11.9663 28.9645 11.7698C29.2102 11.5794 29.3883 11.3706 29.4988 11.1433C29.6155 10.9099 29.6739 10.5998 29.6739 10.2128ZM35.1923 19.7295H30.8715L27.1312 14.6994H25.5006V19.7295H21.9813V6.01188H27.9143C28.725 6.01188 29.4221 6.05795 30.0055 6.15007C30.589 6.2422 31.1356 6.44181 31.6454 6.7489C32.1613 7.05598 32.5697 7.4552 32.8707 7.94654C33.1778 8.43174 33.3313 9.04284 33.3313 9.77985C33.3313 10.7932 33.0948 11.6193 32.6219 12.258C32.1552 12.8968 31.4857 13.4281 30.6136 13.8518L35.1923 19.7295ZM40.121 19.7295H36.6755V16.1089H40.121V19.7295ZM61.3285 10.3418C61.3285 10.956 61.221 11.5579 61.006 12.1475C60.7911 12.731 60.484 13.2223 60.0848 13.6215C59.5382 14.162 58.9271 14.5704 58.2515 14.8468C57.582 15.1232 56.7467 15.2614 55.7456 15.2614H53.5438V19.7295H50.0062V6.01188H55.8285C56.7007 6.01188 57.4346 6.08866 58.0304 6.2422C58.6323 6.3896 59.1635 6.61378 59.6241 6.91472C60.1769 7.27709 60.5976 7.74079 60.8863 8.30583C61.1811 8.87087 61.3285 9.54954 61.3285 10.3418ZM57.6711 10.4247C57.6711 10.0378 57.5667 9.70615 57.3578 9.42977C57.149 9.14725 56.9064 8.95071 56.63 8.84016C56.2615 8.69276 55.9022 8.61292 55.5522 8.60063C55.2021 8.58221 54.7353 8.573 54.1518 8.573H53.5438V12.6818H54.5572C55.1591 12.6818 55.6535 12.645 56.0404 12.5713C56.4335 12.4976 56.7621 12.3502 57.0262 12.1291C57.2534 11.9325 57.4162 11.6991 57.5145 11.4289C57.6189 11.1525 57.6711 10.8178 57.6711 10.4247ZM76.5201 19.7295H72.8627L71.9138 16.9565H66.8284L65.8795 19.7295H62.3142L67.3812 6.01188H71.4532L76.5201 19.7295ZM71.057 14.4414L69.3711 9.5219L67.6852 14.4414H71.057ZM90.9655 19.7295H87.5568L81.7345 10.3142V19.7295H78.4916V6.01188H82.7202L87.7227 13.8703V6.01188H90.9655V19.7295ZM107.428 12.8845C107.428 14.162 107.137 15.3074 106.553 16.3208C105.97 17.3281 105.233 18.1019 104.342 18.6424C103.673 19.0478 102.939 19.3303 102.14 19.49C101.342 19.6496 100.396 19.7295 99.303 19.7295H94.4663V6.01188H99.4411C100.559 6.01188 101.523 6.10708 102.334 6.29748C103.145 6.48173 103.826 6.74582 104.379 7.08976C105.325 7.66709 106.068 8.44709 106.609 9.42977C107.155 10.4063 107.428 11.5579 107.428 12.8845ZM103.771 12.8569C103.771 11.954 103.605 11.1832 103.274 10.5445C102.948 9.89962 102.429 9.39599 101.717 9.03363C101.354 8.85552 100.983 8.73575 100.602 8.67434C100.227 8.60678 99.6592 8.573 98.8976 8.573H98.004V17.1592H98.8976C99.739 17.1592 100.356 17.1223 100.749 17.0486C101.142 16.9688 101.526 16.8275 101.901 16.6248C102.546 16.2563 103.019 15.765 103.32 15.1508C103.621 14.5305 103.771 13.7658 103.771 12.8569ZM120.05 19.7295H110.128V6.01188H120.05V8.66512H113.647V11.0328H119.589V13.686H113.647V17.0763H120.05V19.7295ZM135.094 6.01188L130.036 14.423V19.7295H126.499V14.5888L121.358 6.01188H125.375L128.341 11.3184L131.206 6.01188H135.094ZM158.236 19.7295H153.851L152.57 18.5687C151.956 19.0539 151.278 19.4163 150.534 19.6558C149.797 19.8953 149.017 20.0151 148.194 20.0151C146.499 20.0151 145.166 19.6251 144.196 18.8451C143.232 18.0589 142.75 17.0363 142.75 15.7773C142.75 15.2552 142.826 14.8007 142.98 14.4138C143.134 14.0269 143.336 13.6799 143.588 13.3728C143.828 13.0718 144.104 12.8139 144.417 12.5989C144.73 12.384 145.028 12.1997 145.311 12.0462C145.053 11.8558 144.807 11.6562 144.574 11.4473C144.34 11.2385 144.138 11.0113 143.966 10.7656C143.8 10.5322 143.671 10.2712 143.579 9.98253C143.487 9.69387 143.441 9.36835 143.441 9.00599C143.441 8.57607 143.533 8.17378 143.717 7.79914C143.901 7.41835 144.178 7.07748 144.546 6.77653C144.927 6.4633 145.437 6.21149 146.075 6.0211C146.72 5.82456 147.485 5.72629 148.369 5.72629C149.113 5.72629 149.776 5.79999 150.359 5.9474C150.943 6.0948 151.434 6.30362 151.833 6.57386C152.208 6.83181 152.494 7.14504 152.69 7.51354C152.893 7.87591 152.994 8.26898 152.994 8.69276C152.994 8.97528 152.951 9.28544 152.865 9.62324C152.785 9.96103 152.635 10.2804 152.414 10.5813C152.174 10.9007 151.858 11.1986 151.465 11.475C151.072 11.7514 150.534 11.997 149.853 12.212L152.672 14.6902V11.7237H156.108V12.7463C156.108 13.471 155.985 14.1651 155.74 14.8284C155.494 15.4917 155.156 16.0414 154.726 16.4774L158.236 19.5452V19.7295ZM149.558 9.09812C149.558 8.77875 149.509 8.52693 149.41 8.34268C149.312 8.15229 149.192 8.00795 149.051 7.90969C148.904 7.81142 148.75 7.75 148.591 7.72543C148.431 7.70087 148.302 7.68858 148.204 7.68858C148.099 7.68858 147.979 7.70087 147.844 7.72543C147.715 7.75 147.571 7.81449 147.411 7.9189C147.282 8.00488 147.169 8.13386 147.07 8.30583C146.972 8.47166 146.923 8.69276 146.923 8.96914C146.923 9.3315 147.07 9.68158 147.365 10.0194C147.66 10.3572 148.044 10.7042 148.517 11.0604C148.861 10.7902 149.119 10.4923 149.291 10.1668C149.469 9.83513 149.558 9.4789 149.558 9.09812ZM150.949 17.0118L147.015 13.5202C146.892 13.643 146.751 13.8641 146.591 14.1835C146.432 14.4967 146.352 14.8468 146.352 15.2337C146.352 15.6452 146.432 16.0014 146.591 16.3024C146.751 16.5972 146.948 16.8398 147.181 17.0302C147.427 17.2267 147.7 17.3741 148.001 17.4724C148.302 17.5707 148.597 17.6198 148.885 17.6198C149.303 17.6198 149.671 17.5799 149.991 17.5C150.316 17.4141 150.636 17.2513 150.949 17.0118ZM172.304 19.9967C171.284 19.9967 170.342 19.8462 169.476 19.5452C168.616 19.2443 167.876 18.7959 167.255 18.2002C166.635 17.6044 166.153 16.8613 165.809 15.9707C165.471 15.0802 165.302 14.0514 165.302 12.8845C165.302 11.7974 165.465 10.8117 165.791 9.92725C166.116 9.04284 166.589 8.28433 167.209 7.65173C167.805 7.0437 168.542 6.57386 169.42 6.2422C170.305 5.91055 171.269 5.74472 172.313 5.74472C172.89 5.74472 173.409 5.7785 173.87 5.84606C174.337 5.90748 174.767 5.99039 175.16 6.0948C175.571 6.21149 175.943 6.34354 176.274 6.49094C176.612 6.6322 176.907 6.76425 177.159 6.88708V10.2128H176.754C176.582 10.0654 176.364 9.8904 176.099 9.68772C175.841 9.48505 175.547 9.28544 175.215 9.0889C174.877 8.89237 174.512 8.72654 174.119 8.59142C173.726 8.4563 173.305 8.38874 172.857 8.38874C172.359 8.38874 171.886 8.46859 171.438 8.62827C170.989 8.78182 170.575 9.03977 170.194 9.40213C169.832 9.75221 169.537 10.2159 169.31 10.7932C169.089 11.3706 168.978 12.0707 168.978 12.8937C168.978 13.7536 169.098 14.4722 169.337 15.0495C169.583 15.6268 169.89 16.0813 170.259 16.4129C170.633 16.7507 171.051 16.9933 171.512 17.1407C171.972 17.282 172.427 17.3526 172.875 17.3526C173.305 17.3526 173.729 17.2881 174.146 17.1592C174.57 17.0302 174.96 16.8552 175.316 16.634C175.617 16.4559 175.897 16.2655 176.155 16.0629C176.413 15.8602 176.625 15.6851 176.79 15.5377H177.159V18.8174C176.815 18.971 176.486 19.1153 176.173 19.2504C175.86 19.3856 175.531 19.5022 175.187 19.6005C174.739 19.7295 174.318 19.8278 173.925 19.8953C173.532 19.9629 172.992 19.9967 172.304 19.9967ZM193.097 12.8753C193.097 15.0618 192.47 16.7999 191.217 18.0896C189.964 19.3733 188.232 20.0151 186.021 20.0151C183.817 20.0151 182.088 19.3733 180.835 18.0896C179.582 16.7999 178.955 15.0618 178.955 12.8753C178.955 10.6704 179.582 8.92922 180.835 7.65173C182.088 6.36811 183.817 5.72629 186.021 5.72629C188.22 5.72629 189.949 6.36811 191.208 7.65173C192.467 8.92922 193.097 10.6704 193.097 12.8753ZM188.408 16.3485C188.751 15.9308 189.006 15.4395 189.172 14.8744C189.338 14.3033 189.421 13.6338 189.421 12.8661C189.421 12.0431 189.326 11.3429 189.135 10.7656C188.945 10.1883 188.696 9.7215 188.389 9.36528C188.076 8.99678 187.713 8.72961 187.302 8.56378C186.897 8.39796 186.473 8.31504 186.031 8.31504C185.582 8.31504 185.159 8.39489 184.759 8.55457C184.366 8.71426 184.004 8.97835 183.672 9.34686C183.365 9.6908 183.113 10.1668 182.917 10.7748C182.726 11.3767 182.631 12.0769 182.631 12.8753C182.631 13.6921 182.723 14.3892 182.908 14.9666C183.098 15.5377 183.347 16.0045 183.654 16.3669C183.961 16.7292 184.32 16.9964 184.732 17.1684C185.143 17.3403 185.576 17.4263 186.031 17.4263C186.485 17.4263 186.918 17.3403 187.33 17.1684C187.741 16.9903 188.1 16.717 188.408 16.3485ZM199.186 19.7295H195.741V16.1089H199.186V19.7295Z"
        fill={fill}
      />
      <path
        d="M5.98665 34.5211C5.82405 34.592 5.67623 34.6585 5.54319 34.7206C5.41311 34.7827 5.24164 34.8477 5.02878 34.9157C4.84845 34.9719 4.65185 35.0192 4.43899 35.0576C4.22909 35.099 3.99701 35.1197 3.74276 35.1197C3.26383 35.1197 2.82777 35.0532 2.43457 34.9202C2.04433 34.7842 1.70435 34.5728 1.41462 34.286C1.13081 34.0052 0.909084 33.6489 0.74944 33.2173C0.589796 32.7827 0.509974 32.2787 0.509974 31.7051C0.509974 31.1612 0.586839 30.6748 0.740571 30.2462C0.894302 29.8175 1.11603 29.4553 1.40575 29.1597C1.68661 28.8729 2.02511 28.6542 2.42127 28.5034C2.82038 28.3526 3.26235 28.2772 3.7472 28.2772C4.10196 28.2772 4.45525 28.3201 4.80706 28.4058C5.16182 28.4916 5.55502 28.6423 5.98665 28.8581V29.9003H5.92013C5.5565 29.5958 5.19582 29.374 4.8381 29.2351C4.48038 29.0961 4.09753 29.0267 3.68955 29.0267C3.35548 29.0267 3.05393 29.0813 2.7849 29.1907C2.51883 29.2972 2.28084 29.4642 2.07094 29.6918C1.86695 29.9136 1.7073 30.1944 1.59201 30.5344C1.47966 30.8714 1.42349 31.2617 1.42349 31.7051C1.42349 32.1693 1.48558 32.5684 1.60974 32.9025C1.73687 33.2365 1.89947 33.5085 2.09754 33.7184C2.30449 33.9372 2.54543 34.0998 2.82038 34.2062C3.09828 34.3097 3.39096 34.3614 3.69842 34.3614C4.12118 34.3614 4.51733 34.289 4.88688 34.1441C5.25643 33.9993 5.60232 33.782 5.92456 33.4923H5.98665V34.5211ZM12.2793 35H11.4012V31.7672H8.10637V35H7.22832V28.3969H8.10637V30.9867H11.4012V28.3969H12.2793V35ZM19.2637 35H18.328L17.6806 33.1597H14.8247L14.1773 35H13.2859L15.6895 28.3969H16.8602L19.2637 35ZM17.4101 32.4058L16.2526 29.1641L15.0908 32.4058H17.4101ZM25.7293 35H24.5896L22.3812 32.3747H21.144V35H20.2659V28.3969H22.1151C22.5142 28.3969 22.8468 28.4236 23.1129 28.4768C23.379 28.527 23.6184 28.6187 23.8313 28.7517C24.0708 28.9025 24.257 29.0932 24.39 29.3238C24.526 29.5514 24.594 29.8411 24.594 30.1929C24.594 30.6689 24.4743 31.068 24.2348 31.3903C23.9954 31.7096 23.6657 31.9505 23.2459 32.1131L25.7293 35ZM23.6761 30.255C23.6761 30.0658 23.6421 29.8988 23.5741 29.7539C23.509 29.6061 23.3997 29.4819 23.2459 29.3814C23.1188 29.2957 22.968 29.2366 22.7936 29.204C22.6192 29.1686 22.4137 29.1508 22.1772 29.1508H21.144V31.643H22.0309C22.3088 31.643 22.5512 31.6194 22.7581 31.5721C22.9651 31.5218 23.141 31.4302 23.2858 31.2971C23.4189 31.173 23.5164 31.0311 23.5785 30.8714C23.6436 30.7088 23.6761 30.5034 23.6761 30.255ZM31.2902 29.1774H28.931V35H28.053V29.1774H25.6938V28.3969H31.2902V29.1774ZM36.5274 35H32.1771V28.3969H36.5274V29.1774H33.0552V30.9867H36.5274V31.7672H33.0552V34.2195H36.5274V35ZM43.3877 35H42.248L40.0396 32.3747H38.8024V35H37.9243V28.3969H39.7735C40.1726 28.3969 40.5052 28.4236 40.7713 28.4768C41.0374 28.527 41.2768 28.6187 41.4897 28.7517C41.7292 28.9025 41.9154 29.0932 42.0484 29.3238C42.1844 29.5514 42.2524 29.8411 42.2524 30.1929C42.2524 30.6689 42.1327 31.068 41.8932 31.3903C41.6538 31.7096 41.3241 31.9505 40.9043 32.1131L43.3877 35ZM41.3345 30.255C41.3345 30.0658 41.3005 29.8988 41.2325 29.7539C41.1674 29.6061 41.0581 29.4819 40.9043 29.3814C40.7772 29.2957 40.6264 29.2366 40.452 29.204C40.2776 29.1686 40.0721 29.1508 39.8356 29.1508H38.8024V31.643H39.6893C39.9672 31.643 40.2096 31.6194 40.4165 31.5721C40.6235 31.5218 40.7994 31.4302 40.9442 31.2971C41.0773 31.173 41.1748 31.0311 41.2369 30.8714C41.302 30.7088 41.3345 30.5034 41.3345 30.255ZM48.5894 35H44.2391V28.3969H48.5894V29.1774H45.1172V30.9867H48.5894V31.7672H45.1172V34.2195H48.5894V35ZM55.565 31.7051C55.565 32.3053 55.4334 32.8492 55.1703 33.337C54.9101 33.8248 54.5628 34.2033 54.1282 34.4723C53.8266 34.6585 53.4896 34.7931 53.1171 34.8758C52.7475 34.9586 52.2597 35 51.6537 35H49.9863V28.3969H51.6359C52.2804 28.3969 52.7919 28.4443 53.1703 28.5389C53.5517 28.6305 53.8739 28.7576 54.137 28.9202C54.5864 29.2011 54.9367 29.5751 55.188 30.0422C55.4393 30.5093 55.565 31.0636 55.565 31.7051ZM54.647 31.6918C54.647 31.1745 54.5568 30.7384 54.3765 30.3836C54.1962 30.0289 53.9271 29.7495 53.5694 29.5455C53.3093 29.3977 53.0328 29.2957 52.7402 29.2395C52.4475 29.1804 52.0971 29.1508 51.6892 29.1508H50.8643V34.2461H51.6892C52.1119 34.2461 52.48 34.2151 52.7934 34.153C53.1097 34.0909 53.3994 33.9756 53.6625 33.8071C53.9907 33.5972 54.2361 33.3208 54.3987 32.9778C54.5642 32.6349 54.647 32.2062 54.647 31.6918ZM65.3831 35H64.4474L63.7999 33.1597H60.9441L60.2966 35H59.4053L61.8088 28.3969H62.9795L65.3831 35ZM63.5294 32.4058L62.372 29.1641L61.2102 32.4058H63.5294ZM71.485 34.5211C71.3224 34.592 71.1746 34.6585 71.0416 34.7206C70.9115 34.7827 70.74 34.8477 70.5272 34.9157C70.3468 34.9719 70.1502 35.0192 69.9374 35.0576C69.7275 35.099 69.4954 35.1197 69.2411 35.1197C68.7622 35.1197 68.3261 35.0532 67.9329 34.9202C67.5427 34.7842 67.2027 34.5728 66.913 34.286C66.6292 34.0052 66.4075 33.6489 66.2478 33.2173C66.0882 32.7827 66.0083 32.2787 66.0083 31.7051C66.0083 31.1612 66.0852 30.6748 66.2389 30.2462C66.3927 29.8175 66.6144 29.4553 66.9041 29.1597C67.185 28.8729 67.5235 28.6542 67.9196 28.5034C68.3187 28.3526 68.7607 28.2772 69.2456 28.2772C69.6003 28.2772 69.9536 28.3201 70.3054 28.4058C70.6602 28.4916 71.0534 28.6423 71.485 28.8581V29.9003H71.4185C71.0549 29.5958 70.6942 29.374 70.3365 29.2351C69.9787 29.0961 69.5959 29.0267 69.1879 29.0267C68.8538 29.0267 68.5523 29.0813 68.2833 29.1907C68.0172 29.2972 67.7792 29.4642 67.5693 29.6918C67.3653 29.9136 67.2057 30.1944 67.0904 30.5344C66.978 30.8714 66.9219 31.2617 66.9219 31.7051C66.9219 32.1693 66.9839 32.5684 67.1081 32.9025C67.2352 33.2365 67.3978 33.5085 67.5959 33.7184C67.8029 33.9372 68.0438 34.0998 68.3187 34.2062C68.5966 34.3097 68.8893 34.3614 69.1968 34.3614C69.6195 34.3614 70.0157 34.289 70.3852 34.1441C70.7548 33.9993 71.1007 33.782 71.4229 33.4923H71.485V34.5211ZM77.8264 34.5211C77.6638 34.592 77.516 34.6585 77.383 34.7206C77.2529 34.7827 77.0814 34.8477 76.8686 34.9157C76.6882 34.9719 76.4916 35.0192 76.2788 35.0576C76.0689 35.099 75.8368 35.1197 75.5825 35.1197C75.1036 35.1197 74.6676 35.0532 74.2744 34.9202C73.8841 34.7842 73.5441 34.5728 73.2544 34.286C72.9706 34.0052 72.7489 33.6489 72.5892 33.2173C72.4296 32.7827 72.3498 32.2787 72.3498 31.7051C72.3498 31.1612 72.4266 30.6748 72.5804 30.2462C72.7341 29.8175 72.9558 29.4553 73.2455 29.1597C73.5264 28.8729 73.8649 28.6542 74.261 28.5034C74.6602 28.3526 75.1021 28.2772 75.587 28.2772C75.9417 28.2772 76.295 28.3201 76.6468 28.4058C77.0016 28.4916 77.3948 28.6423 77.8264 28.8581V29.9003H77.7599C77.3963 29.5958 77.0356 29.374 76.6779 29.2351C76.3202 29.0961 75.9373 29.0267 75.5293 29.0267C75.1953 29.0267 74.8937 29.0813 74.6247 29.1907C74.3586 29.2972 74.1206 29.4642 73.9107 29.6918C73.7067 29.9136 73.5471 30.1944 73.4318 30.5344C73.3194 30.8714 73.2633 31.2617 73.2633 31.7051C73.2633 32.1693 73.3254 32.5684 73.4495 32.9025C73.5766 33.2365 73.7393 33.5085 73.9373 33.7184C74.1443 33.9372 74.3852 34.0998 74.6602 34.2062C74.9381 34.3097 75.2307 34.3614 75.5382 34.3614C75.961 34.3614 76.3571 34.289 76.7267 34.1441C77.0962 33.9993 77.4421 33.782 77.7643 33.4923H77.8264V34.5211ZM83.9905 29.1553C84.2595 29.4509 84.465 29.813 84.6069 30.2417C84.7517 30.6704 84.8242 31.1567 84.8242 31.7007C84.8242 32.2447 84.7502 32.7325 84.6024 33.1641C84.4576 33.5928 84.2536 33.9505 83.9905 34.2373C83.7185 34.5358 83.3962 34.7605 83.0237 34.9113C82.6542 35.0621 82.2314 35.1375 81.7554 35.1375C81.2913 35.1375 80.8685 35.0606 80.4872 34.9069C80.1087 34.7531 79.7865 34.5299 79.5204 34.2373C79.2544 33.9446 79.0489 33.5854 78.904 33.1597C78.7621 32.7339 78.6912 32.2476 78.6912 31.7007C78.6912 31.1626 78.7621 30.6807 78.904 30.255C79.0459 29.8264 79.2529 29.4598 79.5249 29.1553C79.785 28.8655 80.1073 28.6438 80.4916 28.4901C80.8789 28.3363 81.3002 28.2595 81.7554 28.2595C82.2285 28.2595 82.6527 28.3378 83.0282 28.4945C83.4066 28.6482 83.7273 28.8685 83.9905 29.1553ZM83.9106 31.7007C83.9106 30.8433 83.7185 30.1826 83.3341 29.7184C82.9498 29.2513 82.4251 29.0178 81.7599 29.0178C81.0888 29.0178 80.5611 29.2513 80.1767 29.7184C79.7954 30.1826 79.6047 30.8433 79.6047 31.7007C79.6047 32.5669 79.7998 33.2306 80.19 33.6918C80.5803 34.15 81.1036 34.3792 81.7599 34.3792C82.4162 34.3792 82.938 34.15 83.3253 33.6918C83.7155 33.2306 83.9106 32.5669 83.9106 31.7007ZM91.1877 32.3481C91.1877 32.8271 91.1345 33.2454 91.0281 33.6031C90.9246 33.9579 90.7532 34.2535 90.5137 34.49C90.2861 34.7147 90.02 34.8788 89.7155 34.9823C89.411 35.0857 89.0562 35.1375 88.6512 35.1375C88.2373 35.1375 87.8766 35.0828 87.5691 34.9734C87.2617 34.864 87.003 34.7029 86.7931 34.49C86.5536 34.2476 86.3807 33.9549 86.2743 33.612C86.1708 33.269 86.119 32.8478 86.119 32.3481V28.3969H86.9971V32.3925C86.9971 32.7502 87.0207 33.0325 87.068 33.2395C87.1183 33.4464 87.2011 33.6342 87.3164 33.8027C87.4465 33.9948 87.6224 34.1397 87.8441 34.2373C88.0688 34.3348 88.3378 34.3836 88.6512 34.3836C88.9675 34.3836 89.2365 34.3363 89.4583 34.2417C89.68 34.1441 89.8574 33.9978 89.9904 33.8027C90.1057 33.6342 90.187 33.442 90.2343 33.2262C90.2846 33.0074 90.3097 32.7369 90.3097 32.4147V28.3969H91.1877V32.3481ZM97.9061 35H96.8196L93.6888 29.0932V35H92.8684V28.3969H94.2298L97.0857 33.7894V28.3969H97.9061V35ZM104.372 29.1774H102.012V35H101.134V29.1774H98.7753V28.3969H104.372V29.1774ZM110.465 35H109.529L108.882 33.1597H106.026L105.378 35H104.487L106.891 28.3969H108.061L110.465 35ZM108.611 32.4058L107.454 29.1641L106.292 32.4058H108.611ZM116.505 35H115.418L112.287 29.0932V35H111.467V28.3969H112.828L115.684 33.7894V28.3969H116.505V35ZM122.97 29.1774H120.611V35H119.733V29.1774H117.374V28.3969H122.97V29.1774ZM128.655 33.1153C128.655 33.3725 128.595 33.6268 128.473 33.8781C128.355 34.1293 128.188 34.3422 127.972 34.5166C127.736 34.7058 127.459 34.8537 127.143 34.9601C126.83 35.0665 126.451 35.1197 126.008 35.1197C125.532 35.1197 125.103 35.0754 124.722 34.9867C124.343 34.898 123.958 34.7664 123.564 34.592V33.4923H123.627C123.961 33.7702 124.346 33.9845 124.784 34.1353C125.221 34.286 125.632 34.3614 126.017 34.3614C126.561 34.3614 126.983 34.2594 127.285 34.0554C127.59 33.8515 127.742 33.5795 127.742 33.2395C127.742 32.9468 127.669 32.731 127.524 32.592C127.383 32.4531 127.165 32.3452 126.873 32.2683C126.651 32.2092 126.41 32.1604 126.15 32.122C125.893 32.0835 125.619 32.0348 125.329 31.9756C124.744 31.8515 124.309 31.6401 124.026 31.3415C123.745 31.0399 123.604 30.6482 123.604 30.1663C123.604 29.6135 123.838 29.1612 124.305 28.8094C124.772 28.4546 125.365 28.2772 126.083 28.2772C126.547 28.2772 126.973 28.3216 127.36 28.4103C127.748 28.4989 128.091 28.6083 128.389 28.7384V29.7761H128.327C128.076 29.5632 127.745 29.3873 127.334 29.2484C126.926 29.1065 126.507 29.0355 126.079 29.0355C125.609 29.0355 125.23 29.1331 124.944 29.3282C124.66 29.5233 124.518 29.7746 124.518 30.0821C124.518 30.357 124.589 30.5728 124.731 30.7295C124.873 30.8862 125.122 31.0059 125.48 31.0887C125.669 31.1301 125.938 31.1804 126.287 31.2395C126.636 31.2986 126.932 31.3592 127.174 31.4213C127.665 31.5514 128.034 31.748 128.283 32.0111C128.531 32.2742 128.655 32.6423 128.655 33.1153Z"
        fill={fill}
      />
      <path
        d="M6.76713 48.2705H5.88909V42.581L4.05318 46.4523H3.52991L1.7073 42.581V48.2705H0.886911V41.6675H2.08424L3.84476 45.3437L5.54763 41.6675H6.76713V48.2705ZM12.8912 48.2705H8.54095V41.6675H12.8912V42.4479H9.41899V44.2572H12.8912V45.0377H9.41899V47.49H12.8912V48.2705ZM20.1684 48.2705H19.2903V42.581L17.4544 46.4523H16.9311L15.1085 42.581V48.2705H14.2881V41.6675H15.4855L17.246 45.3437L18.9489 41.6675H20.1684V48.2705ZM26.9222 46.2395C26.9222 46.5676 26.8601 46.8574 26.7359 47.1087C26.6118 47.3599 26.4447 47.5669 26.2348 47.7295C25.9865 47.9246 25.713 48.0636 25.4144 48.1463C25.1188 48.2291 24.7419 48.2705 24.2836 48.2705H21.9422V41.6675H23.8978C24.3797 41.6675 24.7404 41.6852 24.9798 41.7207C25.2193 41.7561 25.4484 41.8301 25.6672 41.9424C25.9096 42.0695 26.0855 42.2336 26.1949 42.4346C26.3043 42.6327 26.359 42.8707 26.359 43.1486C26.359 43.462 26.2792 43.7295 26.1195 43.9513C25.9599 44.17 25.747 44.3459 25.4809 44.479V44.5144C25.9274 44.6061 26.2792 44.8027 26.5364 45.1042C26.7936 45.4028 26.9222 45.7812 26.9222 46.2395ZM25.4455 43.2639C25.4455 43.1043 25.4189 42.9697 25.3657 42.8604C25.3124 42.751 25.2267 42.6623 25.1084 42.5943C24.9695 42.5145 24.801 42.4657 24.6029 42.4479C24.4048 42.4272 24.1595 42.4169 23.8668 42.4169H22.8202V44.3238H23.9555C24.2304 44.3238 24.4492 44.3105 24.6118 44.2838C24.7744 44.2543 24.9252 44.1952 25.0641 44.1065C25.2031 44.0178 25.3006 43.9039 25.3568 43.765C25.4159 43.6231 25.4455 43.4561 25.4455 43.2639ZM26.0087 46.275C26.0087 46.0089 25.9687 45.7975 25.8889 45.6408C25.8091 45.4841 25.6642 45.3511 25.4543 45.2417C25.3124 45.1678 25.1395 45.1205 24.9355 45.0998C24.7345 45.0762 24.4891 45.0643 24.1994 45.0643H22.8202V47.5211H23.9821C24.3664 47.5211 24.6813 47.5019 24.9266 47.4634C25.172 47.422 25.373 47.3481 25.5297 47.2417C25.6953 47.1264 25.8165 46.9948 25.8934 46.847C25.9702 46.6992 26.0087 46.5085 26.0087 46.275ZM32.5186 48.2705H28.1683V41.6675H32.5186V42.4479H29.0463V44.2572H32.5186V45.0377H29.0463V47.49H32.5186V48.2705ZM39.3788 48.2705H38.2392L36.0308 45.6453H34.7935V48.2705H33.9155V41.6675H35.7647C36.1638 41.6675 36.4964 41.6941 36.7625 41.7473C37.0285 41.7975 37.268 41.8892 37.4809 42.0222C37.7203 42.173 37.9066 42.3637 38.0396 42.5943C38.1756 42.8219 38.2436 43.1116 38.2436 43.4635C38.2436 43.9394 38.1239 44.3385 37.8844 44.6608C37.6449 44.9801 37.3153 45.221 36.8955 45.3836L39.3788 48.2705ZM37.3256 43.5255C37.3256 43.3363 37.2916 43.1693 37.2236 43.0244C37.1586 42.8766 37.0492 42.7524 36.8955 42.6519C36.7684 42.5662 36.6176 42.5071 36.4432 42.4745C36.2687 42.4391 36.0633 42.4213 35.8268 42.4213H34.7935V44.9136H35.6804C35.9583 44.9136 36.2007 44.8899 36.4077 44.8426C36.6146 44.7923 36.7905 44.7007 36.9354 44.5677C37.0684 44.4435 37.166 44.3016 37.2281 44.1419C37.2931 43.9793 37.3256 43.7739 37.3256 43.5255ZM48.4741 48.2705H47.5961V45.0377H44.3012V48.2705H43.4232V41.6675H44.3012V44.2572H47.5961V41.6675H48.4741V48.2705ZM54.4297 48.2705H50.2524V41.6675H51.1304V47.49H54.4297V48.2705ZM60.2878 46.2395C60.2878 46.5676 60.2257 46.8574 60.1015 47.1087C59.9773 47.3599 59.8103 47.5669 59.6004 47.7295C59.3521 47.9246 59.0786 48.0636 58.78 48.1463C58.4844 48.2291 58.1074 48.2705 57.6492 48.2705H55.3078V41.6675H57.2634C57.7453 41.6675 58.106 41.6852 58.3454 41.7207C58.5849 41.7561 58.814 41.8301 59.0328 41.9424C59.2752 42.0695 59.4511 42.2336 59.5605 42.4346C59.6699 42.6327 59.7246 42.8707 59.7246 43.1486C59.7246 43.462 59.6448 43.7295 59.4851 43.9513C59.3255 44.17 59.1126 44.3459 58.8465 44.479V44.5144C59.2929 44.6061 59.6448 44.8027 59.902 45.1042C60.1592 45.4028 60.2878 45.7812 60.2878 46.2395ZM58.8111 43.2639C58.8111 43.1043 58.7845 42.9697 58.7312 42.8604C58.678 42.751 58.5923 42.6623 58.474 42.5943C58.3351 42.5145 58.1666 42.4657 57.9685 42.4479C57.7704 42.4272 57.525 42.4169 57.2324 42.4169H56.1858V44.3238H57.3211C57.596 44.3238 57.8148 44.3105 57.9774 44.2838C58.14 44.2543 58.2907 44.1952 58.4297 44.1065C58.5686 44.0178 58.6662 43.9039 58.7224 43.765C58.7815 43.6231 58.8111 43.4561 58.8111 43.2639ZM59.3742 46.275C59.3742 46.0089 59.3343 45.7975 59.2545 45.6408C59.1747 45.4841 59.0298 45.3511 58.8199 45.2417C58.678 45.1678 58.5051 45.1205 58.3011 45.0998C58.1001 45.0762 57.8547 45.0643 57.565 45.0643H56.1858V47.5211H57.3477C57.732 47.5211 58.0468 47.5019 58.2922 47.4634C58.5376 47.422 58.7386 47.3481 58.8953 47.2417C59.0609 47.1264 59.1821 46.9948 59.259 46.847C59.3358 46.6992 59.3742 46.5085 59.3742 46.275ZM67.0549 48.2705H64.4474V47.5965H65.3121V42.3415H64.4474V41.6675H67.0549V42.3415H66.1902V47.5965H67.0549V48.2705ZM73.587 48.2705H72.5005L69.3697 42.3637V48.2705H68.5493V41.6675H69.9107L72.7666 47.0599V41.6675H73.587V48.2705ZM80.0526 42.4479H77.6934V48.2705H76.8154V42.4479H74.4562V41.6675H80.0526V42.4479ZM85.2898 48.2705H80.9395V41.6675H85.2898V42.4479H81.8175V44.2572H85.2898V45.0377H81.8175V47.49H85.2898V48.2705ZM92.15 48.2705H91.0104L88.802 45.6453H87.5647V48.2705H86.6867V41.6675H88.5359C88.935 41.6675 89.2676 41.6941 89.5337 41.7473C89.7997 41.7975 90.0392 41.8892 90.2521 42.0222C90.4915 42.173 90.6778 42.3637 90.8108 42.5943C90.9468 42.8219 91.0148 43.1116 91.0148 43.4635C91.0148 43.9394 90.8951 44.3385 90.6556 44.6608C90.4161 44.9801 90.0865 45.221 89.6667 45.3836L92.15 48.2705ZM90.0968 43.5255C90.0968 43.3363 90.0628 43.1693 89.9948 43.0244C89.9298 42.8766 89.8204 42.7524 89.6667 42.6519C89.5396 42.5662 89.3888 42.5071 89.2144 42.4745C89.0399 42.4391 88.8345 42.4213 88.598 42.4213H87.5647V44.9136H88.4516C88.7295 44.9136 88.9719 44.8899 89.1789 44.8426C89.3858 44.7923 89.5617 44.7007 89.7066 44.5677C89.8396 44.4435 89.9372 44.3016 89.9993 44.1419C90.0643 43.9793 90.0968 43.7739 90.0968 43.5255ZM98.0391 48.2705H96.9527L93.8219 42.3637V48.2705H93.0015V41.6675H94.3629L97.2187 47.0599V41.6675H98.0391V48.2705ZM105.001 48.2705H104.066L103.418 46.4302H100.562L99.9149 48.2705H99.0236L101.427 41.6675H102.598L105.001 48.2705ZM103.148 45.6763L101.99 42.4346L100.828 45.6763H103.148ZM110.713 42.4479H108.354V48.2705H107.476V42.4479H105.117V41.6675H110.713V42.4479ZM113.928 48.2705H111.321V47.5965H112.185V42.3415H111.321V41.6675H113.928V42.3415H113.063V47.5965H113.928V48.2705ZM120.345 42.4258C120.614 42.7214 120.819 43.0836 120.961 43.5122C121.106 43.9409 121.179 44.4272 121.179 44.9712C121.179 45.5152 121.105 46.003 120.957 46.4346C120.812 46.8633 120.608 47.221 120.345 47.5078C120.073 47.8064 119.751 48.031 119.378 48.1818C119.009 48.3326 118.586 48.408 118.11 48.408C117.646 48.408 117.223 48.3311 116.842 48.1774C116.463 48.0237 116.141 47.8004 115.875 47.5078C115.609 47.2151 115.403 46.8559 115.258 46.4302C115.117 46.0045 115.046 45.5181 115.046 44.9712C115.046 44.4331 115.117 43.9513 115.258 43.5255C115.4 43.0969 115.607 42.7303 115.879 42.4258C116.139 42.136 116.462 41.9143 116.846 41.7606C117.233 41.6069 117.655 41.53 118.11 41.53C118.583 41.53 119.007 41.6083 119.383 41.765C119.761 41.9187 120.082 42.139 120.345 42.4258ZM120.265 44.9712C120.265 44.1139 120.073 43.4531 119.689 42.989C119.304 42.5218 118.78 42.2883 118.114 42.2883C117.443 42.2883 116.916 42.5218 116.531 42.989C116.15 43.4531 115.959 44.1139 115.959 44.9712C115.959 45.8374 116.154 46.5011 116.545 46.9623C116.935 47.4206 117.458 47.6497 118.114 47.6497C118.771 47.6497 119.292 47.4206 119.68 46.9623C120.07 46.5011 120.265 45.8374 120.265 44.9712ZM127.609 48.2705H126.522L123.391 42.3637V48.2705H122.571V41.6675H123.932L126.788 47.0599V41.6675H127.609V48.2705ZM134.571 48.2705H133.635L132.988 46.4302H130.132L129.485 48.2705H128.593L130.997 41.6675H132.167L134.571 48.2705ZM132.717 45.6763L131.56 42.4346L130.398 45.6763H132.717ZM139.751 48.2705H135.573V41.6675H136.451V47.49H139.751V48.2705Z"
        fill={fill}
      />
    </svg>
  );
};
