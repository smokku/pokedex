import { Instance } from "mobx-state-tree"
import { PokemonV2EgggroupMaxFieldsModelBase } from "./PokemonV2EgggroupMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EgggroupMaxFieldsModel */
export interface PokemonV2EgggroupMaxFieldsModelType extends Instance<typeof PokemonV2EgggroupMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EgggroupMaxFieldsModel */
export { selectFromPokemonV2EgggroupMaxFields, pokemonV2EgggroupMaxFieldsModelPrimitives, PokemonV2EgggroupMaxFieldsModelSelector } from "./PokemonV2EgggroupMaxFieldsModel.base"

/**
 * PokemonV2EgggroupMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2EgggroupMaxFieldsModel = PokemonV2EgggroupMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
