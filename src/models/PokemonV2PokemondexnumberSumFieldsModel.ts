import { Instance } from "mobx-state-tree"
import { PokemonV2PokemondexnumberSumFieldsModelBase } from "./PokemonV2PokemondexnumberSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemondexnumberSumFieldsModel */
export interface PokemonV2PokemondexnumberSumFieldsModelType extends Instance<typeof PokemonV2PokemondexnumberSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemondexnumberSumFieldsModel */
export { selectFromPokemonV2PokemondexnumberSumFields, pokemonV2PokemondexnumberSumFieldsModelPrimitives, PokemonV2PokemondexnumberSumFieldsModelSelector } from "./PokemonV2PokemondexnumberSumFieldsModel.base"

/**
 * PokemonV2PokemondexnumberSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2PokemondexnumberSumFieldsModel = PokemonV2PokemondexnumberSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
