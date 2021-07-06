import { Instance } from "mobx-state-tree"
import { PokemonV2BerryfirmnessnameVarianceFieldsModelBase } from "./PokemonV2BerryfirmnessnameVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2BerryfirmnessnameVarianceFieldsModel */
export interface PokemonV2BerryfirmnessnameVarianceFieldsModelType extends Instance<typeof PokemonV2BerryfirmnessnameVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryfirmnessnameVarianceFieldsModel */
export { selectFromPokemonV2BerryfirmnessnameVarianceFields, pokemonV2BerryfirmnessnameVarianceFieldsModelPrimitives, PokemonV2BerryfirmnessnameVarianceFieldsModelSelector } from "./PokemonV2BerryfirmnessnameVarianceFieldsModel.base"

/**
 * PokemonV2BerryfirmnessnameVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2BerryfirmnessnameVarianceFieldsModel = PokemonV2BerryfirmnessnameVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
