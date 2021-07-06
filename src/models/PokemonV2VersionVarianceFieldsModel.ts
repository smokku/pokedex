import { Instance } from "mobx-state-tree"
import { PokemonV2VersionVarianceFieldsModelBase } from "./PokemonV2VersionVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2VersionVarianceFieldsModel */
export interface PokemonV2VersionVarianceFieldsModelType extends Instance<typeof PokemonV2VersionVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2VersionVarianceFieldsModel */
export { selectFromPokemonV2VersionVarianceFields, pokemonV2VersionVarianceFieldsModelPrimitives, PokemonV2VersionVarianceFieldsModelSelector } from "./PokemonV2VersionVarianceFieldsModel.base"

/**
 * PokemonV2VersionVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2VersionVarianceFieldsModel = PokemonV2VersionVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
