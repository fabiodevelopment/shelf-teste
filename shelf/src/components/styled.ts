import styled from 'styled-components';

export const ProductItem = styled.article`
	background: white;
	border-radius: 8px;
	box-sizing: border-box;
	margin: 0 10px 20px;
	min-width: 304px;
	padding: 32px;
	position: relative;
	width: calc(25% - 20px);

	&:hover {
		box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.08);
		transition: all 0.2s ease-in-out;
	}
	
	.productItem {

		&-image {
			height: 240px;
			margin: 0 auto 20px;
			width: 240px;
			img {
				width: 100%;
			}
		}

		&-addWishlist {
			background-color: #F2F3F6;
			border-radius: 30px;
			border: none;
			box-sizing: border-box;
			cursor: pointer;
			height: 48px;
			padding: 6px 0 0 2px;
			position: absolute;
			right: 32px;
			top: 32px;
			width: 48px;

			&:hover {
				background-color: #FEE5EC;
				transition: all 0.2s ease-in-out;
				svg {
					path {
						stroke: #DA4B4F;
						transition: all 0.2s ease-in-out;
					}
				}
			}

			&.active {
				background-color: #DA4B4F;
				svg {
					path {
						fill: white;
						stroke: #DA4B4F;
					}
				}
				&:hover {
					background-color: #C22539;
					svg {
						path {
							fill: white;
							stroke: #C22539;
						}
					}
				}
			}

		}

		&-name {
			font-size: 14px;
			height: 60px;
			overflow: hidden;
		}
		
		&-oldPrice {
			color: #B5B5B6;
			display: block;
			font-size: 14px;
			font-weight: 500;
			letter-spacing: -0.005em;
			line-height: 20px;
			text-decoration: line-through;
		}
		
		&-price {
			color: #DA4B4F;
			font-size: 20px;
			font-weight: 600;
			letter-spacing: -0.005em;
			line-height: 24px;
		}
		
		&-installments {
			color: #848587;
			font-size: 12px;
			font-weight: 500;
			letter-spacing: -0.005em;
			line-height: 16px;
			margin-bottom: 40px;
			span {
				color: black;
			}
		}

		&-buy {
			width: 100%;
			background-color: #40B25C;
			border: none;
			color: white;
			text-transform: uppercase;
			font-weight: bold;
			font-size: 16px;
			border-radius: 5px;
			padding: 15px 0;
			cursor: pointer;
			&:hover {
				transition: all 0.2s ease-in-out;
				background-color: #1C6C3E;
			}
			
			&.active {
				background-color: #A3F9B9;
				color: black;

				span {
					&:before {
						content: '';
						display: inline-block;
						width: 18px;
						height: 13px;
						margin-right: 5px;
						background-image: url("data:image/svg+xml,%3Csvg width='18' height='13' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M17 1 6 12 1 7' stroke='%231C1C1C' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
					}
				}
			}

		}

	}

`