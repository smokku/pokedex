import { Instance } from "mobx-state-tree"
import { PokemonV2VersionMinFieldsModelBase } from "./PokemonV2VersionMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2VersionMinFieldsModel */
export interface PokemonV2VersionMinFieldsModelType extends Instance<typeof PokemonV2VersionMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2VersionMinFieldsModel */
export { selectFromPokemonV2VersionMinFields, pokemonV2VersionMinFieldsModelPrimitives, PokemonV2VersionMinFieldsModelSelector } from "./PokemonV2VersionMinFieldsModel.base"

/**
 * PokemonV2VersionMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2VersionMinFieldsModel = PokemonV2VersionMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
