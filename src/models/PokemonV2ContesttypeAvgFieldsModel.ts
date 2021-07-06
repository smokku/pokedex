import { Instance } from "mobx-state-tree"
import { PokemonV2ContesttypeAvgFieldsModelBase } from "./PokemonV2ContesttypeAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ContesttypeAvgFieldsModel */
export interface PokemonV2ContesttypeAvgFieldsModelType extends Instance<typeof PokemonV2ContesttypeAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContesttypeAvgFieldsModel */
export { selectFromPokemonV2ContesttypeAvgFields, pokemonV2ContesttypeAvgFieldsModelPrimitives, PokemonV2ContesttypeAvgFieldsModelSelector } from "./PokemonV2ContesttypeAvgFieldsModel.base"

/**
 * PokemonV2ContesttypeAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2ContesttypeAvgFieldsModel = PokemonV2ContesttypeAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
