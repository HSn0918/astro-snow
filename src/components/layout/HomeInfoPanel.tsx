import { useMemo } from 'react';
import type { Router } from '@constants/router';
import { Routes } from '@constants/router';
import { cn } from '@lib/utils';
import { getLqipGradient } from '@lib/lqip';
import ButtonLink from '@components/control/ButtonLink';
import Social from './Social';

interface HomeInfoPanelProps {
  avatar: string;
  name?: string;
  description?: string;
  postCount: number;
  categoryCount: number;
  tagCount: number;
  routes: Router[];
  currentPath: string;
  className?: string;
}

export function HomeInfoPanel({
  avatar,
  name,
  description,
  postCount,
  categoryCount,
  tagCount,
  routes,
  currentPath,
  className,
}: HomeInfoPanelProps) {
  const lqipGradient = useMemo(() => getLqipGradient(avatar), [avatar]);

  return (
    <div className={cn('flex flex-col items-center', className)}>
      <div className="h-40 w-40 rounded-full" style={lqipGradient ? { backgroundImage: lqipGradient } : undefined}>
        <img
          className="shadow-card-darker hover:animate-shake h-full w-full rounded-full transition"
          src={avatar}
          alt={`${name ?? ''} avatar`}
          loading="eager"
          fetchPriority="high"
        />
      </div>

      <p className="mt-2">{name}</p>
      <p className="text-muted-foreground mt-3 text-center">{description}</p>
      <Social />
      <div className="text-muted-foreground mt-3 flex justify-center text-center text-sm/4 whitespace-nowrap select-none dark:text-white/80">
        <a href={Routes.Home} className="hover:text-blue flex cursor-pointer flex-col gap-2 p-1 transition">
          <span className="text-lg/5 font-bold">{postCount}</span>
          文章
        </a>
        <div className="bg-muted-foreground mx-3 w-px"></div>
        <a href={Routes.Categories} aria-label="分类" className="hover:text-blue">
          <p className="flex cursor-pointer flex-col gap-2 p-1 transition">
            <span className="text-lg/5 font-bold">{categoryCount}</span>
            分类
          </p>
        </a>
        <div className="bg-muted-foreground mx-3 w-px"></div>
        <a href={Routes.Tags} className="hover:text-blue flex cursor-pointer flex-col gap-2 p-1 transition">
          <span className="text-lg/5 font-bold">{tagCount}</span>
          标签
        </a>
      </div>
      <div className="mt-6 flex w-full flex-col items-center gap-2.5">
        {routes.map(({ name: routeName, path, icon, children }, index) => {
          if (children?.length) {
            return (
              <details
                key={`${routeName ?? 'route'}-${index}`}
                className="bg-foreground/10 flex w-40 flex-col rounded-xl opacity-75 transition-all duration-300 hover:opacity-100"
                data-collapsible
              >
                <summary
                  className="flex-center hover:bg-foreground/5 h-12 w-full cursor-pointer rounded-xl transition-colors"
                  aria-label={`${routeName}菜单`}
                >
                  {icon && <i className={`mr-1.5 ${icon}`} aria-hidden="true" />}
                  {routeName}
                  <i
                    className={cn(
                      'collapse-caret fa-solid fa-caret-down ml-2 text-base transition-transform duration-300',
                    )}
                    aria-hidden="true"
                  ></i>
                </summary>
                <div
                  className={cn('collapse-content')}
                  data-collapse-content
                >
                  <div className="flex flex-col items-center">
                    {children.map(({ name: childName, path: childPath, icon: childIcon }) => (
                      <ButtonLink
                        key={childPath}
                        url={childPath}
                        label={childName}
                        variant="gradient-shoka"
                        className={cn('shoka-button-shadow h-12 w-40 rounded-xl text-base tracking-wider', {
                          'text-muted-foreground/80 hover:bg-muted-foreground/10 bg-none shadow-none hover:shadow-none':
                            childPath !== currentPath,
                        })}
                      >
                        {childIcon && <i className={`mr-1.5 ${childIcon}`} aria-hidden="true" />}
                        {childName}
                      </ButtonLink>
                    ))}
                  </div>
                </div>
              </details>
            );
          }

          return (
            <ButtonLink
              key={path}
              url={path}
              label={routeName}
              variant="gradient-shoka"
              className={cn(
                'shoka-button-shadow h-12 w-40 rounded-xl text-base tracking-wider opacity-75 transition-all duration-300 hover:opacity-100',
                {
                  'text-muted-foreground/80 hover:bg-muted-foreground/10 bg-none shadow-none hover:shadow-none':
                    path !== currentPath,
                },
              )}
            >
              {icon && <i className={`mr-1.5 ${icon}`} aria-hidden="true" />}
              {routeName}
            </ButtonLink>
          );
        })}
      </div>
    </div>
  );
}

export default HomeInfoPanel;
