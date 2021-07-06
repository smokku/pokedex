import { Instance } from "mobx-state-tree"
import { PokemonV2VersionMaxFieldsModelBase } from "./PokemonV2VersionMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2VersionMaxFieldsModel */
export interface PokemonV2VersionMaxFieldsModelType extends Instance<typeof PokemonV2VersionMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2VersionMaxFieldsModel */
export { selectFromPokemonV2VersionMaxFields, pokemonV2VersionMaxFieldsModelPrimitives, PokemonV2VersionMaxFieldsModelSelector } from "./PokemonV2VersionMaxFieldsModel.base"

/**
 * PokemonV2VersionMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2VersionMaxFieldsModel = PokemonV2VersionMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
