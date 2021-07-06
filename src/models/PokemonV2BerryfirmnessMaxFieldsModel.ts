import { Instance } from "mobx-state-tree"
import { PokemonV2BerryfirmnessMaxFieldsModelBase } from "./PokemonV2BerryfirmnessMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2BerryfirmnessMaxFieldsModel */
export interface PokemonV2BerryfirmnessMaxFieldsModelType extends Instance<typeof PokemonV2BerryfirmnessMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryfirmnessMaxFieldsModel */
export { selectFromPokemonV2BerryfirmnessMaxFields, pokemonV2BerryfirmnessMaxFieldsModelPrimitives, PokemonV2BerryfirmnessMaxFieldsModelSelector } from "./PokemonV2BerryfirmnessMaxFieldsModel.base"

/**
 * PokemonV2BerryfirmnessMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2BerryfirmnessMaxFieldsModel = PokemonV2BerryfirmnessMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
