interface BrandLogoProps {
    height?: string;
    width?: string;
    className?: string;
}

export default function BrandLogo({
    height = "30",
    width = "110",
    className,
}: BrandLogoProps) {
    return (
        <svg
            className={className}
            fill="none"
            height={height}
            viewBox="0 0 307 84"
            width={width}
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0_2_3)">
                <path
                    className="fill-black dark:fill-white"
                    d="M22.912 18.232C25.792 18.232 28.2027 18.5947 30.144 19.32C32.0853 20.0453 33.9307 21.112 35.68 22.52L32.576 26.136C31.1893 24.9627 29.7173 24.1307 28.16 23.64C26.624 23.128 25.0133 22.872 23.328 22.872C20.9173 22.872 18.688 23.448 16.64 24.6C14.592 25.7307 12.9387 27.6187 11.68 30.264C10.4427 32.888 9.824 36.4507 9.824 40.952C9.824 45.3253 10.4107 48.8347 11.584 51.48C12.7787 54.1253 14.3893 56.0347 16.416 57.208C18.4427 58.3813 20.704 58.968 23.2 58.968C25.6747 58.968 27.7013 58.5947 29.28 57.848C30.88 57.1013 32.2667 56.248 33.44 55.288L36.32 58.936C34.976 60.2373 33.2267 61.368 31.072 62.328C28.9173 63.2667 26.272 63.736 23.136 63.736C19.5733 63.736 16.3413 62.8613 13.44 61.112C10.56 59.3627 8.27733 56.8027 6.592 53.432C4.90667 50.04 4.064 45.88 4.064 40.952C4.064 36.0027 4.91733 31.8427 6.624 28.472C8.352 25.1013 10.6453 22.552 13.504 20.824C16.384 19.096 19.52 18.232 22.912 18.232ZM57.639 28.6C60.8177 28.6 63.4737 29.3253 65.607 30.776C67.7617 32.2053 69.3723 34.232 70.439 36.856C71.527 39.48 72.071 42.5733 72.071 46.136C72.071 49.5707 71.5163 52.6107 70.407 55.256C69.2977 57.9013 67.6657 59.9813 65.511 61.496C63.3777 62.9893 60.7323 63.736 57.575 63.736C54.4177 63.736 51.7617 63.0107 49.607 61.56C47.4523 60.1093 45.8203 58.072 44.711 55.448C43.623 52.8027 43.079 49.72 43.079 46.2C43.079 42.7227 43.6337 39.6613 44.743 37.016C45.8523 34.3707 47.4843 32.312 49.639 30.84C51.815 29.3467 54.4817 28.6 57.639 28.6ZM57.639 32.984C54.7377 32.984 52.5403 34.0613 51.047 36.216C49.575 38.3493 48.839 41.6773 48.839 46.2C48.839 50.6373 49.5643 53.9333 51.015 56.088C52.487 58.2427 54.6737 59.32 57.575 59.32C60.4763 59.32 62.6523 58.2427 64.103 56.088C65.575 53.9333 66.311 50.616 66.311 46.136C66.311 41.656 65.5857 38.3493 64.135 36.216C62.6843 34.0613 60.519 32.984 57.639 32.984ZM103.342 15.064L108.718 15.736V63H104.014L103.502 58.552C102.243 60.344 100.793 61.656 99.15 62.488C97.5287 63.32 95.79 63.736 93.934 63.736C91.0113 63.736 88.6007 63 86.702 61.528C84.8033 60.056 83.3953 58.008 82.478 55.384C81.5607 52.7387 81.102 49.6773 81.102 46.2C81.102 42.8293 81.6247 39.8213 82.67 37.176C83.7153 34.5093 85.2193 32.4187 87.182 30.904C89.166 29.368 91.5447 28.6 94.318 28.6C96.2593 28.6 97.966 28.9413 99.438 29.624C100.91 30.2853 102.211 31.2667 103.342 32.568V15.064ZM95.726 32.92C92.91 32.92 90.7447 34.0187 89.23 36.216C87.7153 38.4133 86.958 41.7413 86.958 46.2C86.958 49.1013 87.2673 51.5333 87.886 53.496C88.5047 55.4587 89.4113 56.9307 90.606 57.912C91.822 58.8933 93.3047 59.384 95.054 59.384C96.974 59.384 98.606 58.84 99.95 57.752C101.315 56.664 102.446 55.4373 103.342 54.072V37.24C102.425 35.8747 101.315 34.8187 100.014 34.072C98.7127 33.304 97.2833 32.92 95.726 32.92ZM125.781 48.056C125.888 50.6587 126.389 52.792 127.285 54.456C128.181 56.0987 129.365 57.3147 130.837 58.104C132.309 58.872 133.909 59.256 135.637 59.256C137.365 59.256 138.922 59 140.309 58.488C141.717 57.976 143.157 57.2187 144.629 56.216L147.157 59.768C145.578 61.0053 143.776 61.976 141.749 62.68C139.744 63.384 137.685 63.736 135.573 63.736C132.309 63.736 129.525 63 127.221 61.528C124.917 60.056 123.157 58.008 121.941 55.384C120.746 52.7387 120.149 49.6773 120.149 46.2C120.149 42.7867 120.757 39.7573 121.973 37.112C123.189 34.4667 124.896 32.3867 127.093 30.872C129.29 29.3573 131.882 28.6 134.869 28.6C137.706 28.6 140.149 29.272 142.197 30.616C144.245 31.9387 145.813 33.8373 146.901 36.312C148.01 38.7653 148.565 41.6987 148.565 45.112C148.565 45.688 148.554 46.232 148.533 46.744C148.512 47.2347 148.48 47.672 148.437 48.056H125.781ZM134.933 33.016C132.437 33.016 130.346 33.9013 128.661 35.672C126.997 37.4427 126.048 40.184 125.813 43.896H143.381C143.317 40.2907 142.528 37.5813 141.013 35.768C139.498 33.9333 137.472 33.016 134.933 33.016ZM187.836 50.808C187.836 53.3253 187.207 55.5653 185.948 57.528C184.689 59.4693 182.865 60.9947 180.476 62.104C178.087 63.192 175.175 63.736 171.74 63.736C168.519 63.736 165.596 63.2453 162.972 62.264C160.369 61.2827 158.14 59.896 156.284 58.104L159.58 54.392C161.116 55.8213 162.876 56.9627 164.86 57.816C166.844 58.648 169.169 59.064 171.836 59.064C173.628 59.064 175.303 58.776 176.86 58.2C178.417 57.6027 179.676 56.7067 180.636 55.512C181.596 54.296 182.076 52.76 182.076 50.904C182.076 49.4747 181.799 48.2587 181.244 47.256C180.689 46.2533 179.708 45.368 178.3 44.6C176.892 43.8107 174.929 43.0427 172.412 42.296C169.511 41.4427 166.993 40.4827 164.86 39.416C162.748 38.328 161.105 36.9947 159.932 35.416C158.78 33.8373 158.204 31.8853 158.204 29.56C158.204 27.3627 158.812 25.4107 160.028 23.704C161.244 21.9973 162.919 20.664 165.052 19.704C167.207 18.7227 169.681 18.232 172.476 18.232C175.527 18.232 178.172 18.6693 180.412 19.544C182.673 20.3973 184.721 21.6347 186.556 23.256L183.292 26.872C181.713 25.464 180.017 24.4507 178.204 23.832C176.391 23.192 174.545 22.872 172.668 22.872C171.068 22.872 169.596 23.1173 168.252 23.608C166.929 24.0773 165.863 24.792 165.052 25.752C164.263 26.6907 163.868 27.896 163.868 29.368C163.868 30.6267 164.209 31.7147 164.892 32.632C165.575 33.5493 166.727 34.392 168.348 35.16C169.969 35.9067 172.177 36.696 174.972 37.528C177.255 38.1893 179.367 39.0213 181.308 40.024C183.271 41.0053 184.849 42.3493 186.044 44.056C187.239 45.7413 187.836 47.992 187.836 50.808ZM198.307 63V29.304H202.883L203.299 33.976C204.664 32.248 206.371 30.9253 208.419 30.008C210.488 29.0693 212.494 28.6 214.435 28.6C217.742 28.6 220.142 29.4747 221.635 31.224C223.15 32.9733 223.907 35.4053 223.907 38.52V63H218.531V42.488C218.531 40.184 218.403 38.328 218.147 36.92C217.891 35.4907 217.358 34.456 216.547 33.816C215.736 33.1547 214.478 32.824 212.771 32.824C211.448 32.824 210.2 33.112 209.027 33.688C207.875 34.264 206.84 34.9893 205.923 35.864C205.027 36.7173 204.28 37.5813 203.683 38.456V63H198.307ZM260.81 55.64C260.81 56.984 261.034 57.9653 261.482 58.584C261.93 59.2027 262.623 59.6613 263.562 59.96L262.25 63.736C260.799 63.544 259.53 63.0853 258.442 62.36C257.354 61.6133 256.565 60.4933 256.074 59C254.858 60.5573 253.343 61.7413 251.53 62.552C249.717 63.3413 247.711 63.736 245.514 63.736C242.143 63.736 239.487 62.7867 237.546 60.888C235.605 58.9893 234.634 56.472 234.634 53.336C234.634 49.8587 235.989 47.192 238.698 45.336C241.407 43.48 245.322 42.552 250.442 42.552H255.402V39.736C255.402 37.304 254.687 35.5867 253.258 34.584C251.85 33.56 249.887 33.048 247.37 33.048C246.261 33.048 244.959 33.1867 243.466 33.464C241.973 33.72 240.351 34.1573 238.602 34.776L237.194 30.712C239.263 29.944 241.205 29.4 243.018 29.08C244.831 28.76 246.559 28.6 248.202 28.6C252.405 28.6 255.551 29.5813 257.642 31.544C259.754 33.4853 260.81 36.1307 260.81 39.48V55.64ZM246.89 59.64C248.554 59.64 250.143 59.224 251.658 58.392C253.173 57.5387 254.421 56.3653 255.402 54.872V46.2H250.538C246.826 46.2 244.202 46.84 242.666 48.12C241.151 49.4 240.394 51.1173 240.394 53.272C240.394 55.3627 240.927 56.952 241.994 58.04C243.082 59.1067 244.714 59.64 246.89 59.64ZM290.129 28.6C293.116 28.6 295.494 29.3253 297.265 30.776C299.057 32.2267 300.348 34.2747 301.137 36.92C301.926 39.544 302.321 42.616 302.321 46.136C302.321 49.528 301.841 52.5573 300.881 55.224C299.942 57.8693 298.513 59.9493 296.593 61.464C294.673 62.9787 292.252 63.736 289.329 63.736C285.638 63.736 282.673 62.4347 280.433 59.832V75.896L275.057 76.568V29.304H279.633L280.081 34.008C281.318 32.28 282.79 30.9467 284.497 30.008C286.225 29.0693 288.102 28.6 290.129 28.6ZM288.849 32.92C286.993 32.92 285.35 33.4853 283.921 34.616C282.513 35.7253 281.35 36.9627 280.433 38.328V55.032C281.308 56.3333 282.406 57.368 283.729 58.136C285.073 58.8827 286.545 59.256 288.145 59.256C290.94 59.256 293.041 58.1893 294.449 56.056C295.857 53.9227 296.561 50.6053 296.561 46.104C296.561 43.16 296.284 40.7173 295.729 38.776C295.174 36.8133 294.332 35.352 293.201 34.392C292.07 33.4107 290.62 32.92 288.849 32.92Z"
                />
            </g>
            <defs>
                <clipPath id="clip0_2_3">
                    <rect fill="white" height="84" width="307" />
                </clipPath>
            </defs>
        </svg>
    );
}