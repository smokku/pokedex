import { Instance } from "mobx-state-tree"
import { PokemonV2VersiongroupmovelearnmethodMaxFieldsModelBase } from "./PokemonV2VersiongroupmovelearnmethodMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2VersiongroupmovelearnmethodMaxFieldsModel */
export interface PokemonV2VersiongroupmovelearnmethodMaxFieldsModelType extends Instance<typeof PokemonV2VersiongroupmovelearnmethodMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2VersiongroupmovelearnmethodMaxFieldsModel */
export { selectFromPokemonV2VersiongroupmovelearnmethodMaxFields, pokemonV2VersiongroupmovelearnmethodMaxFieldsModelPrimitives, PokemonV2VersiongroupmovelearnmethodMaxFieldsModelSelector } from "./PokemonV2VersiongroupmovelearnmethodMaxFieldsModel.base"

/**
 * PokemonV2VersiongroupmovelearnmethodMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2VersiongroupmovelearnmethodMaxFieldsModel = PokemonV2VersiongroupmovelearnmethodMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
