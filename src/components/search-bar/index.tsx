import React from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
    margin: 0.625rem;
    //position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.25rem;
    width: 18.75rem;
    height: 3rem;
    //padding: 2.625rem; 
    background: linear-gradient(to right, #3761f6, #4aacf5); /* adapts to text direction */
    border-radius: 50rem;


`;

const SearchInput = styled.input`
    width: 100%;
    height: 100%;
    padding-block: 0;
    padding-inline: 0;
    box-sizing: border-box;
    border: none;
    background: transparent;
    color: white;
    padding: 0.625rem;
    font-size: 1.5em;


    &::placeholder {
        color: lightgray;
    }
    &:focus {
        outline: none;
    }

`;
const SearchBarWrapper = styled.span`
    width: 75%;
`;

const SearchButtonWrapper = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.125rem;
`;

const SearchButton = styled.button`

    height: 100%; /* Make the button take full width of its container */
    aspect-ratio: 1; /* Ensures the button is always a circle */
    border-radius: 50%; /* Circular shape */
    background-color: white;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 0.5rem;

    svg {
        fill: #4aacf5; /* This will change the color of the SVG to red */
    }
    
    &:hover {
        background-color: #3761f6;
        cursor: pointer;
    }
`;

interface SearchBarProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearch: () => Promise<void>;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, handleSearch }) => {
    return (
        <SearchContainer id='search-container'>
          <SearchBarWrapper id='search-bar-wrapper'>
            <SearchInput id='search-input' type="text" placeholder="Search..." value={value} onChange={onChange} />
          </SearchBarWrapper>
          <SearchButtonWrapper id='search-button-wrapper'>
            <SearchButton id='search-button' type="button" onClick={handleSearch}>
              <svg height="100%" width="100%" viewBox="0 0 490.4 490.4"
                   xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path d="M484.1,454.796l-110.5-110.6c29.8-36.3,47.6-82.8,47.6-133.4c0-116.3-94.3-210.6-210.6-210.6S0,94.496,0,210.796
                s94.3,210.6,210.6,210.6c50.8,0,97.4-18,133.8-48l110.5,110.5c12.9,11.8,25,4.2,29.2,0C492.5,475.596,492.5,463.096,484.1,454.796z
                M41.1,210.796c0-93.6,75.9-169.5,169.5-169.5s169.6,75.9,169.6,169.5s-75.9,169.5-169.5,169.5S41.1,304.396,41.1,210.796z"/>
                </g>
              </svg>
            </SearchButton>
          </SearchButtonWrapper>
        </SearchContainer>
    );
}

export default SearchBar;