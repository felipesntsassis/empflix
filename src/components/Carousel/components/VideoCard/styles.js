import styled from "styled-components";

export const VideoCardContainer = styled.a`
			border: 2px solid;
			border-radius: 4px;
			text-decoration: none;
			overflow: hidden;
			cursor: pointer;
			color: white;
			flex: 0 0 298px;
			width: 298px;
			height: 197px;
			background-image: ${({ url }) => `url(${url})`};
			background-size: cover;
			background-position: center;
			border-radius: 10px;
			position: relative;
			display: flex;
			align-items: flex-end;
			padding: 16px;
            opacity: 0.5;
            transition: all 0.3s ease-in-out;
            
			&:hover,
			&:focus {
				opacity: 1;
                transform: scale(1.2);
                z-index: 2;
			}

			&:not(:first-child) {
				margin-left: 20px;
			}
		`;
