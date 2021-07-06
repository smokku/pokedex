import { Instance } from "mobx-state-tree"
import { PokemonV2BerryfirmnessVarianceFieldsModelBase } from "./PokemonV2BerryfirmnessVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2BerryfirmnessVarianceFieldsModel */
export interface PokemonV2BerryfirmnessVarianceFieldsModelType extends Instance<typeof PokemonV2BerryfirmnessVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryfirmnessVarianceFieldsModel */
export { selectFromPokemonV2BerryfirmnessVarianceFields, pokemonV2BerryfirmnessVarianceFieldsModelPrimitives, PokemonV2BerryfirmnessVarianceFieldsModelSelector } from "./PokemonV2BerryfirmnessVarianceFieldsModel.base"

/**
 * PokemonV2BerryfirmnessVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2BerryfirmnessVarianceFieldsModel = PokemonV2BerryfirmnessVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
