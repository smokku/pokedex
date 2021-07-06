import { Instance } from "mobx-state-tree"
import { PokemonV2VersiongroupMaxFieldsModelBase } from "./PokemonV2VersiongroupMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2VersiongroupMaxFieldsModel */
export interface PokemonV2VersiongroupMaxFieldsModelType extends Instance<typeof PokemonV2VersiongroupMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2VersiongroupMaxFieldsModel */
export { selectFromPokemonV2VersiongroupMaxFields, pokemonV2VersiongroupMaxFieldsModelPrimitives, PokemonV2VersiongroupMaxFieldsModelSelector } from "./PokemonV2VersiongroupMaxFieldsModel.base"

/**
 * PokemonV2VersiongroupMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2VersiongroupMaxFieldsModel = PokemonV2VersiongroupMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
