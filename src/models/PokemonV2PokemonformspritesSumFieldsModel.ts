import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonformspritesSumFieldsModelBase } from "./PokemonV2PokemonformspritesSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonformspritesSumFieldsModel */
export interface PokemonV2PokemonformspritesSumFieldsModelType extends Instance<typeof PokemonV2PokemonformspritesSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonformspritesSumFieldsModel */
export { selectFromPokemonV2PokemonformspritesSumFields, pokemonV2PokemonformspritesSumFieldsModelPrimitives, PokemonV2PokemonformspritesSumFieldsModelSelector } from "./PokemonV2PokemonformspritesSumFieldsModel.base"

/**
 * PokemonV2PokemonformspritesSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2PokemonformspritesSumFieldsModel = PokemonV2PokemonformspritesSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
