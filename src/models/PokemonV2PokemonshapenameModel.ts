import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonshapenameModelBase } from "./PokemonV2PokemonshapenameModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonshapenameModel */
export interface PokemonV2PokemonshapenameModelType extends Instance<typeof PokemonV2PokemonshapenameModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonshapenameModel */
export { selectFromPokemonV2Pokemonshapename, pokemonV2PokemonshapenameModelPrimitives, PokemonV2PokemonshapenameModelSelector } from "./PokemonV2PokemonshapenameModel.base"

/**
 * PokemonV2PokemonshapenameModel
 *
 * columns and relationships of "pokemon_v2_pokemonshapename"
 */
export const PokemonV2PokemonshapenameModel = PokemonV2PokemonshapenameModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
