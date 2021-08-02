import * as Mithril from "mithril";
import LoadingIndicator from 'flarum/common/components/LoadingIndicator';
import Tooltip from 'flarum/common/components/Tooltip';
import avatar from 'flarum/common/helpers/avatar';
import Link from 'flarum/common/components/Link';
import type User from "flarum/common/models/User";

import Widget from 'flarum/extensions/afrux-forum-widgets-core/common/components/Widget';

export default class OnlineUsersWidget extends Widget {
  oninit(vnode: Mithril.VnodeDOM): void {
    super.oninit(vnode);

    this.attrs.state.users ??= [];
    this.attrs.state.isLoading ??= false;
    this.attrs.state.hasLoaded ??= false;
  }

  oncreate(vnode): void {
    super.oncreate(vnode);

    if (!this.attrs.state.hasLoaded) {
      this.load();
    }
  }

  className(): string {
    return 'Afrux-OnlineUsersWidget';
  }

  icon(): string {
    return 'fas fa-user-friends';
  }

  title(): string|null {
    return app.translator.trans('afrux-online-users-widget.forum.widget.title');
  }

  content(): Mithril.Children {
    if (this.attrs.state.isLoading) {
      return <LoadingIndicator />;
    }

    const max = app.forum.attribute('afrux-online-users-widget.maxUsers') || 15;

    console.log(max);

    return (
      <div className="Afrux-OnlineUsersWidget-users">
        {this.attrs.state.users.slice(0, max).map((user: User) => (
          <Link href={app.route('user', { username: user.slug() })} className="Afrux-OnlineUsersWidget-users-item">
            <Tooltip text={user.displayName()}>
              {avatar(user)}
            </Tooltip>
          </Link>
        ))}
        {this.attrs.state.users.length > max ? (
          <span className="Afrux-OnlineUsersWidget-users-item Afrux-OnlineUsersWidget-users-item--plus">
            <span className="Avatar">{`+${max}`}</span>
          </span>
        ) : null}
      </div>
    );
  }

  load(): void {
    this.attrs.state.isLoading = true;

    app.store.find('users', { filter: { online: true }, sort: '-lastSeenAt' })
      .then((users: User[]) => {
        this.attrs.state.users = users;
        this.attrs.state.isLoading = false;
        this.attrs.state.hasLoaded = true;
        m.redraw();
      });
  }
}