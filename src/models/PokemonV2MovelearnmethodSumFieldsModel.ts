import { Instance } from "mobx-state-tree"
import { PokemonV2MovelearnmethodSumFieldsModelBase } from "./PokemonV2MovelearnmethodSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovelearnmethodSumFieldsModel */
export interface PokemonV2MovelearnmethodSumFieldsModelType extends Instance<typeof PokemonV2MovelearnmethodSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovelearnmethodSumFieldsModel */
export { selectFromPokemonV2MovelearnmethodSumFields, pokemonV2MovelearnmethodSumFieldsModelPrimitives, PokemonV2MovelearnmethodSumFieldsModelSelector } from "./PokemonV2MovelearnmethodSumFieldsModel.base"

/**
 * PokemonV2MovelearnmethodSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2MovelearnmethodSumFieldsModel = PokemonV2MovelearnmethodSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
