import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonegggroupSumFieldsModelBase } from "./PokemonV2PokemonegggroupSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonegggroupSumFieldsModel */
export interface PokemonV2PokemonegggroupSumFieldsModelType extends Instance<typeof PokemonV2PokemonegggroupSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonegggroupSumFieldsModel */
export { selectFromPokemonV2PokemonegggroupSumFields, pokemonV2PokemonegggroupSumFieldsModelPrimitives, PokemonV2PokemonegggroupSumFieldsModelSelector } from "./PokemonV2PokemonegggroupSumFieldsModel.base"

/**
 * PokemonV2PokemonegggroupSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2PokemonegggroupSumFieldsModel = PokemonV2PokemonegggroupSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
