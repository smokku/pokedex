import { Instance } from "mobx-state-tree"
import { PokemonV2EncountermethodnameStddevPopFieldsModelBase } from "./PokemonV2EncountermethodnameStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncountermethodnameStddevPopFieldsModel */
export interface PokemonV2EncountermethodnameStddevPopFieldsModelType extends Instance<typeof PokemonV2EncountermethodnameStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncountermethodnameStddevPopFieldsModel */
export { selectFromPokemonV2EncountermethodnameStddevPopFields, pokemonV2EncountermethodnameStddevPopFieldsModelPrimitives, PokemonV2EncountermethodnameStddevPopFieldsModelSelector } from "./PokemonV2EncountermethodnameStddevPopFieldsModel.base"

/**
 * PokemonV2EncountermethodnameStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2EncountermethodnameStddevPopFieldsModel = PokemonV2EncountermethodnameStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
