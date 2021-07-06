import { Instance } from "mobx-state-tree"
import { PokemonV2BerryflavormapMaxFieldsModelBase } from "./PokemonV2BerryflavormapMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2BerryflavormapMaxFieldsModel */
export interface PokemonV2BerryflavormapMaxFieldsModelType extends Instance<typeof PokemonV2BerryflavormapMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryflavormapMaxFieldsModel */
export { selectFromPokemonV2BerryflavormapMaxFields, pokemonV2BerryflavormapMaxFieldsModelPrimitives, PokemonV2BerryflavormapMaxFieldsModelSelector } from "./PokemonV2BerryflavormapMaxFieldsModel.base"

/**
 * PokemonV2BerryflavormapMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2BerryflavormapMaxFieldsModel = PokemonV2BerryflavormapMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
