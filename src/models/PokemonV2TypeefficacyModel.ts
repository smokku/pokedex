import { Instance } from "mobx-state-tree"
import { PokemonV2TypeefficacyModelBase } from "./PokemonV2TypeefficacyModel.base"

/* The TypeScript type of an instance of PokemonV2TypeefficacyModel */
export interface PokemonV2TypeefficacyModelType extends Instance<typeof PokemonV2TypeefficacyModel.Type> {}

/* A graphql query fragment builders for PokemonV2TypeefficacyModel */
export { selectFromPokemonV2Typeefficacy, pokemonV2TypeefficacyModelPrimitives, PokemonV2TypeefficacyModelSelector } from "./PokemonV2TypeefficacyModel.base"

/**
 * PokemonV2TypeefficacyModel
 *
 * columns and relationships of "pokemon_v2_typeefficacy"
 */
export const PokemonV2TypeefficacyModel = PokemonV2TypeefficacyModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
