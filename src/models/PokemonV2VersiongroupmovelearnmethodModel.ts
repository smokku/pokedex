import { Instance } from "mobx-state-tree"
import { PokemonV2VersiongroupmovelearnmethodModelBase } from "./PokemonV2VersiongroupmovelearnmethodModel.base"

/* The TypeScript type of an instance of PokemonV2VersiongroupmovelearnmethodModel */
export interface PokemonV2VersiongroupmovelearnmethodModelType extends Instance<typeof PokemonV2VersiongroupmovelearnmethodModel.Type> {}

/* A graphql query fragment builders for PokemonV2VersiongroupmovelearnmethodModel */
export { selectFromPokemonV2Versiongroupmovelearnmethod, pokemonV2VersiongroupmovelearnmethodModelPrimitives, PokemonV2VersiongroupmovelearnmethodModelSelector } from "./PokemonV2VersiongroupmovelearnmethodModel.base"

/**
 * PokemonV2VersiongroupmovelearnmethodModel
 *
 * columns and relationships of "pokemon_v2_versiongroupmovelearnmethod"
 */
export const PokemonV2VersiongroupmovelearnmethodModel = PokemonV2VersiongroupmovelearnmethodModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
