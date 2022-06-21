import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Endpoints } from '@octokit/types';
import { ReactElement } from 'react';

import { Link } from 'components';

type RepoType = Endpoints['GET /user/repos']['response']['data'][0];

/**
 * A card containing information about a GitHub repository.
 *
 * @param repo - GitHub repository object
 * @returns RepoCard component
 */
export const RepoCard = ({ repo }: { repo: RepoType }): ReactElement => {
  return (
    <div className='repo-card'>
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
      <Link className='repo-link' href={repo.url}>
        View Repository
        <FontAwesomeIcon icon={faChevronRight} className='repo-link__chevron' />
        <FontAwesomeIcon icon={faChevronRight} className='repo-link__chevron' />
      </Link>
    </div>
  );
};