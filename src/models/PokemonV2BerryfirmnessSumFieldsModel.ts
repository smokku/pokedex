import { Instance } from "mobx-state-tree"
import { PokemonV2BerryfirmnessSumFieldsModelBase } from "./PokemonV2BerryfirmnessSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2BerryfirmnessSumFieldsModel */
export interface PokemonV2BerryfirmnessSumFieldsModelType extends Instance<typeof PokemonV2BerryfirmnessSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryfirmnessSumFieldsModel */
export { selectFromPokemonV2BerryfirmnessSumFields, pokemonV2BerryfirmnessSumFieldsModelPrimitives, PokemonV2BerryfirmnessSumFieldsModelSelector } from "./PokemonV2BerryfirmnessSumFieldsModel.base"

/**
 * PokemonV2BerryfirmnessSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2BerryfirmnessSumFieldsModel = PokemonV2BerryfirmnessSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
