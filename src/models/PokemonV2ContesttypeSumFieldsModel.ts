import { Instance } from "mobx-state-tree"
import { PokemonV2ContesttypeSumFieldsModelBase } from "./PokemonV2ContesttypeSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ContesttypeSumFieldsModel */
export interface PokemonV2ContesttypeSumFieldsModelType extends Instance<typeof PokemonV2ContesttypeSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContesttypeSumFieldsModel */
export { selectFromPokemonV2ContesttypeSumFields, pokemonV2ContesttypeSumFieldsModelPrimitives, PokemonV2ContesttypeSumFieldsModelSelector } from "./PokemonV2ContesttypeSumFieldsModel.base"

/**
 * PokemonV2ContesttypeSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2ContesttypeSumFieldsModel = PokemonV2ContesttypeSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
