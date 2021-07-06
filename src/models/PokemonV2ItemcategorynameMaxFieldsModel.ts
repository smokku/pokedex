import { Instance } from "mobx-state-tree"
import { PokemonV2ItemcategorynameMaxFieldsModelBase } from "./PokemonV2ItemcategorynameMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemcategorynameMaxFieldsModel */
export interface PokemonV2ItemcategorynameMaxFieldsModelType extends Instance<typeof PokemonV2ItemcategorynameMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemcategorynameMaxFieldsModel */
export { selectFromPokemonV2ItemcategorynameMaxFields, pokemonV2ItemcategorynameMaxFieldsModelPrimitives, PokemonV2ItemcategorynameMaxFieldsModelSelector } from "./PokemonV2ItemcategorynameMaxFieldsModel.base"

/**
 * PokemonV2ItemcategorynameMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2ItemcategorynameMaxFieldsModel = PokemonV2ItemcategorynameMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
