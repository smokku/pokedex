import { Instance } from "mobx-state-tree"
import { PokemonV2NatureModelBase } from "./PokemonV2NatureModel.base"

/* The TypeScript type of an instance of PokemonV2NatureModel */
export interface PokemonV2NatureModelType extends Instance<typeof PokemonV2NatureModel.Type> {}

/* A graphql query fragment builders for PokemonV2NatureModel */
export { selectFromPokemonV2Nature, pokemonV2NatureModelPrimitives, PokemonV2NatureModelSelector } from "./PokemonV2NatureModel.base"

/**
 * PokemonV2NatureModel
 *
 * columns and relationships of "pokemon_v2_nature"
 */
export const PokemonV2NatureModel = PokemonV2NatureModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
