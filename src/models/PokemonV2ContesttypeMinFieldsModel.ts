import { Instance } from "mobx-state-tree"
import { PokemonV2ContesttypeMinFieldsModelBase } from "./PokemonV2ContesttypeMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ContesttypeMinFieldsModel */
export interface PokemonV2ContesttypeMinFieldsModelType extends Instance<typeof PokemonV2ContesttypeMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContesttypeMinFieldsModel */
export { selectFromPokemonV2ContesttypeMinFields, pokemonV2ContesttypeMinFieldsModelPrimitives, PokemonV2ContesttypeMinFieldsModelSelector } from "./PokemonV2ContesttypeMinFieldsModel.base"

/**
 * PokemonV2ContesttypeMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2ContesttypeMinFieldsModel = PokemonV2ContesttypeMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
