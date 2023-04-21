/**
 * Component showing a user stat
 *
 * @component
 * @example
 * const icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKJSURBVHgB7ZvPThNRFMa/c2ZaYCgFIkZDcG2M7MCFcSMb4wMYE/f6AOIDyAvIExC3GvUBjBtcgYngSmJYq+gCkxYYYJjOPc5pIXHhP1rutLm9v0V7e6dd/PLNPXfOTUo4RmSBsflseHdPBgKmMhzAIEsrZjSm2fX9kznSl+Xlm+G1oe1zVE4DOIgclbL3BxM/5ubeNlgnXJZV1E0dRcAkazPRPu+NoQ+IIuzyXlKroE/Q+sQ8FIboE7QYM/oML+w6Xth1vLDreGHX8cKu44VdxwsXSWiSajn79mjQfP2EguhaL1wytUuBxK/yU7Wp/GDtMwqia8JMB/P525SOhYLXKIiu3NKaLom5q2NNtyHjiyiIrggzp5rsDjh4kmLiVoMHdlAQFH+4PIkC0FQFQ/Xfyf3t2lljfQ1rFWYy9/NhFYgRZrRhmF4yuC5irhPM7ZNrQUarhqKHKY9ZK2JWEx7Mtt6A5CpOiXD5ToLzq7CAtTWsybYjq5BJn+oeDQtYE2a0qnB7SDVErYPf/xkrws10qLXHtovAtHV3/AsrwoSDUfQoPds8EFEdFrAifLytdLanCn2BBawlTMQr6IAU5XewgDVhQ+ES2kSfrzMe/wgLWBNuPjgIbaANhEJrzYTVoiVB6TFOSV6sVg7pwgtYwqpwM+W8I/rf77daxWgeFrHePBzi4uIgf88XdfYg/1jVBA1KS7ndjkhjmk3eWOipRz6vsjYbB6Ww9rBX8KeWruOFXccLu44Xdh0v7Dpe2HW8sOtwZuQIfYIZiVIeqVCCPmG3zjHj+WYspVIGx1HHydn1faYFmOHpK9suS6ubOuqYfr2wtTYTjSS1iiv/dNH6lBxSMnHjXky0YHTuJ1gS36BEkLdnAAAAAElFTkSuQmCC'
 * const count = 150
 * const unit = 'g'
 * const title= 'calories
 * return (
 *  <Stat icon={icon} count={count} unit={unit} title={title}/>
 * )
 */

import styled from 'styled-components';
import PropTypes from 'prop-types';

const StatArticle = styled.article`
  display: flex;
  align-items: center;
  gap: 24px;
  background-color: #fbfbfb;
  padding: 32px;
  border-radius: 5px;
`;

const StatImage = styled.img`
  width: 60px;
  height: 60px;
`;

const StatCount = styled.h4`
  font-size: 20px;
  font-weight: 700;
  margin: 0;
`;

const StatType = styled.p`
  font-size: 14px;
  color: #74798c;
  margin: 4px 0;
`;

function Stat({ icon, count, unit, title }) {
  return (
    <StatArticle>
      <StatImage src={icon} alt={title} />
      <div>
        <StatCount>{`${count} ${unit}`}</StatCount>
        <StatType>{title}</StatType>
      </div>
    </StatArticle>
  );
}

Stat.propTypes = {
  /**
   * Card icon
   */
  icon: PropTypes.string,
  /**
   * stat count
   */
  count: PropTypes.number,
  /**
   * unit of stat
   */
  unit: PropTypes.string,
  /**
   * title of stat
   */
  title: PropTypes.string,
};

export default Stat;
