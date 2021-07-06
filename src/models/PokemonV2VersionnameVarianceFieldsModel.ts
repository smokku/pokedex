import { Instance } from "mobx-state-tree"
import { PokemonV2VersionnameVarianceFieldsModelBase } from "./PokemonV2VersionnameVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2VersionnameVarianceFieldsModel */
export interface PokemonV2VersionnameVarianceFieldsModelType extends Instance<typeof PokemonV2VersionnameVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2VersionnameVarianceFieldsModel */
export { selectFromPokemonV2VersionnameVarianceFields, pokemonV2VersionnameVarianceFieldsModelPrimitives, PokemonV2VersionnameVarianceFieldsModelSelector } from "./PokemonV2VersionnameVarianceFieldsModel.base"

/**
 * PokemonV2VersionnameVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2VersionnameVarianceFieldsModel = PokemonV2VersionnameVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
