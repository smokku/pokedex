import { Instance } from "mobx-state-tree"
import { PokemonV2ContesttypeMaxFieldsModelBase } from "./PokemonV2ContesttypeMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ContesttypeMaxFieldsModel */
export interface PokemonV2ContesttypeMaxFieldsModelType extends Instance<typeof PokemonV2ContesttypeMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContesttypeMaxFieldsModel */
export { selectFromPokemonV2ContesttypeMaxFields, pokemonV2ContesttypeMaxFieldsModelPrimitives, PokemonV2ContesttypeMaxFieldsModelSelector } from "./PokemonV2ContesttypeMaxFieldsModel.base"

/**
 * PokemonV2ContesttypeMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2ContesttypeMaxFieldsModel = PokemonV2ContesttypeMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
