import { Instance } from "mobx-state-tree"
import { PokemonV2GenderMaxFieldsModelBase } from "./PokemonV2GenderMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2GenderMaxFieldsModel */
export interface PokemonV2GenderMaxFieldsModelType extends Instance<typeof PokemonV2GenderMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2GenderMaxFieldsModel */
export { selectFromPokemonV2GenderMaxFields, pokemonV2GenderMaxFieldsModelPrimitives, PokemonV2GenderMaxFieldsModelSelector } from "./PokemonV2GenderMaxFieldsModel.base"

/**
 * PokemonV2GenderMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2GenderMaxFieldsModel = PokemonV2GenderMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
